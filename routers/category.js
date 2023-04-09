const { Router } = require('express');
const router = Router();
const Products = require("../model/Products")

router.post("/create", async (req, res) => {
    const product = new Products({products: req.body})
    await product.save();
    res.status(201).send("bajarildi");
})

module.exports = router 