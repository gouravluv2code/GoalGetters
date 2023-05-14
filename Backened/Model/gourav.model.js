const mongoose = require("mongoose");

const govSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        type: { type: String, required: true },
        url: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);
const govModel = mongoose.model("govData", govSchema);

module.exports = govModel;
