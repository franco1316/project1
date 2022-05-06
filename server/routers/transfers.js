const express = require("express");

const { addNewTransfer } = require("../controllers/transfers");

const router = express.Router();

router.route("/").post(addNewTransfer);


module.exports = { transfers: router };
