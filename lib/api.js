const router = require('express').Router();
const { MongoStorage } = require('./db');

const db = new MongoStorage();

router.post('/moves', (req, res) =>  {
    res.status(200).json({});
});

router.get('/history', (req, res) =>  {
    res.status(200).json({});
});

module.exports = router;