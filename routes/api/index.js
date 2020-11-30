const router = require("express").Router();
const bubbleRoutes = require("./bubbles");

// Bubble routes
router.use("/bubbles", bubbleRoutes);

module.exports = router;
