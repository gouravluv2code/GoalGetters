const express = require("express");
const FitRouter = express.Router();
const fitModel = require("../Model/fitness.model");


FitRouter.post("/add", async (req, res) => {
    try {
        const data = fitModel(req.body);
        await data.save();
        res.status(200).send("Successfully added Data");
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});


FitRouter.get("/", async (req, res) => {
    try {
        const data = await fitModel.find();
        res.status(200).send({ data: data });
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});


module.exports = { FitRouter };