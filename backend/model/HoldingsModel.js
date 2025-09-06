const { model } = require("mongoose");
const { HoldingsSchema } = require("../schemas/HoldingsSchemas");

const HoldingsModel = model("Holding", HoldingsSchema);

module.exports = { HoldingsModel };
