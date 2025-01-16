const express = require('express');
const Category = require('../models/category');

const router = express.Router();

router.post('/', async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
});

router.get('/', async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
});

router.put('/:id', async (req, res) => {
    await Category.update(req.body, { where: { CategoryId: req.params.id } });
    res.json({ message: 'Category updated' });
});

router.delete('/:id', async (req, res) => {
    await Category.destroy({ where: { CategoryId: req.params.id } });
    res.json({ message: 'Category deleted' });
});

module.exports = router;
