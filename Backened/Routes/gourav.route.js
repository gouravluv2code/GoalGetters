const express = require("express");
const govRouter = express.Router();
const govModel = require("../Model/gourav.model");


// govRouter.post("/add", async (req, res) => {
//     try {
//         const gdata = govModel(req.body);
//         await gdata.save();
//         res.status(200).send("Successfully added Data");
//     } catch (err) {
//         res.status(400).send({ err: err.message });
//     }
// });


govRouter.get("/", async (req, res) => {
    try {
        const gdata = await govModel.find();
        res.status(200).send({ gData: gdata });
    } catch (err) {
        res.status(400).send({ err: err.message });
    }
});


module.exports = { govRouter };
