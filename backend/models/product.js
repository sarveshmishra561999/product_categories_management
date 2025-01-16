const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Category = require('./category');

const Product = sequelize.define('Product', {
    ProductId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    ProductName: { type: DataTypes.STRING, allowNull: false },
    CategoryId: { type: DataTypes.INTEGER, references: { model: Category, key: 'CategoryId' } },
});

Product.belongsTo(Category, { foreignKey: 'CategoryId' });

module.exports = Product;
