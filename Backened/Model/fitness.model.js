const mongoose = require("mongoose");

const fitSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        milestone: { type: String, required: true },
        text: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);
const fitModel = mongoose.model("fitness", fitSchema);

module.exports = fitModel;
