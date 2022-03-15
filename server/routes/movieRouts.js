const express = require("express");
const { movieEdit, movieAll, movieDelete } = require("../controller/movieController");
const { movieAdd } = require("../controller/movieAddController");
const router = express.Router();

router.post("/add", movieAdd);
router.put("/edit", movieEdit);
router.get("/all", movieAll);
router.get("/info", movieAll);
router.delete("/delete", movieDelete);

module.exports = router;
