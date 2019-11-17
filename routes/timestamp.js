const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const date = new Date();

    res.send({
        unix: date.getTime(),
        utc: date.toUTCString()
    });
});

router.get('/:timeValue', (req, res) => {
    const timeValue = +req.params.timeValue ? +req.params.timeValue : req.params.timeValue;

    if (typeof timeValue === 'string' && Date.parse(timeValue) ||
        typeof timeValue === 'number') {
        const date = new Date(timeValue);
        res.send({
            unix: date.getTime(),
            utc: date.toUTCString()
        });
    } else {
        res.send({ error: 'Invalid Date' });
    }
});

module.exports = router;