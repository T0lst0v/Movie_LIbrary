const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/db/user", require("./routes/userRouts"));
app.use("/db/movie", require("./routes/movieRouts"));

app.listen(PORT, () => "server is running on port: " + PORT);
