const express = require("express");
const cors = require("cors");

const { users } = require("./routers/users");
const { transfers } = require("./routers/transfers");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/v1/users", users);
app.use("/api/v1/transfers", transfers);

module.exports = { app };
