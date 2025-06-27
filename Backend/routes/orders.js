const express = require('express');
const Order = require('../models/Order');
const jwt = require('jsonwebtoken');
const router = express.Router();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: 'Access denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;
        next();
    } catch {
        res.status(401).json({ error: 'Invalid token' });
    }
};

router.post('/', authMiddleware, async (req, res) => {
    const { items, total } = req.body;
    const order = await Order.create({ userId: req.userId, items, total });
    res.status(201).json(order);
});

module.exports = router;
