const express = require("express");

const { loginExist } = require("../middlewares/users");

const {
  getTransferById,
  addNewAccount,
  logginInAccount,
} = require("../controllers/users");

const router = express.Router();

router.route("/signup").post(addNewAccount);
router.route("/login").post(logginInAccount);

router.route("/:id/history").get(loginExist, getTransferById);

module.exports = { users: router };
