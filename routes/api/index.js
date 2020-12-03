const router = require("express").Router();
const bubbleRoutes = require("./bubbles");

// Bubble routes
router.use("/bubble", bubbleRoutes);

module.exports = router;
