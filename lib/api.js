const router = require('express').Router();
const {MongoStorage} = require('./db');

const db = new MongoStorage();

router.post('/moves', async (req, res) => {
    try {
        const id = req.body.id;
        const action = req.body.action;

        if (id && action) {
            await db.__saveMove({id: id, action: action});
            res.status(200).json({ success: true });
        } else {
            res.status(403).json({ error: 'Missing parameters.'});
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

router.post('/history', async (req, res) => {
    try {
        const id = req.body.id;

        if (id) {
            const response = await db.__getHistory(id);
            res.status(200).json({ history: response });
        } else {
            res.status(403).json({ error: 'Missing parameters.'});
        }
    } catch (err) {
        res.status(400).json({ error: err });
    }
});

module.exports = router;