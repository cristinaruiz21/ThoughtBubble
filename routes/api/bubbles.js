const router = require("express").Router();
const bubbleController = require("../../controllers/bubbleController");

// Matches with "/api/bubbles"
router.route("/")
  // .get(bubbleController.findAll)
  .post(bubbleController.create);

// Matches with "/api/bubbles/:id"
// router
//   .route("/:id")
//   .get(bubbleController.findById)
//   .put(bubbleController.update)
//   .delete(bubbleController.remove);

module.exports = router;