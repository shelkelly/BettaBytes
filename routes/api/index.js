const router = require("express").Router();
const favsRoutes = require("./fish");

// Post routes
router.use("/favorites", favsRoutes);

module.exports = router;