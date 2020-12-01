const router = require("express").Router();
const bubbleRoutes = require("./bubbles");
const picRoutes = require("./pics");

// Bubble routes
router.use("/bubbles", bubbleRoutes);

//Pic routes
router.use("/pics",picRoutes);

module.exports = router;
