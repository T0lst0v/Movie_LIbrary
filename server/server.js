const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, " server is running on port: " + PORT);
