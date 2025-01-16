require("dotenv/config")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const sequelize = require('./config/database');
const rateLimiter= require('express-rate-limit')
const limit=rateLimiter({
    windowMs:1*60*1000,
    max:100,
    message:"rate limit exceed try after some time"
})
const app = express();
app.use(cors());
app.use(limit)
app.use(bodyParser.json());


app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is running on port 3000');
    });
});
