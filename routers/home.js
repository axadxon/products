const { Router } = require('express');
const router = Router();

router.get("/", (req, res) => {
    const validToken = isValidToken(req.header("x-api-key"));
    if (!validToken) {
        res.status(400).send('tokin faild');
    }
    res.status(200).send('salom');
});

function isValidToken(key) {
    return key === process.env.KEY
}

// console.log(process.env.KEY);


module.exports = router