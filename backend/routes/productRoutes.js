const express = require('express');
const Product = require('../models/product');
const Category = require('../models/category');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
});

router.get('/', async (req, res) => {
    try {
        const { page = 1, size = 10 } = req.query;

        const pageNumber = parseInt(page, 10);
        const pageSize = parseInt(size, 10);

        const totalItems = await Product.count();
        const totalPages = Math.ceil(totalItems / pageSize);

        const products = await Product.findAll({
            include: { model: Category, attributes: ['CategoryName', 'CategoryId'] },
            limit: pageSize,
            offset: (pageNumber - 1) * pageSize,
        });

        res.json({
            currentPage: pageNumber,
            totalPages,
            totalItems,
            data: products,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching products', error });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const product = await Product.update(req.body, { where: { ProductId: req.params.id } });
        if (product[0] === 0) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product updated' });
    } catch (error) {
        res.status(400).json({ message: 'Error updating product', error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.destroy({ where: { ProductId: req.params.id } });
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
});

module.exports = router;
