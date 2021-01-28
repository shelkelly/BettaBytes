const router = require("express").Router();
const fishController = require("../../controllers/fishController");

// Matches with "/api/fish"
router
  .route("/")
  .get(fishController.findAll)
  .post(fishController.create);

// Matches with "/api/fish/:id"
router
  .route("/:id")
  .get(fishController.findById)
  .put(fishController.update)
  .delete(fishController.remove);

module.exports = router;