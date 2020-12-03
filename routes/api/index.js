const router = require("express").Router();
const bubbleRoutes = require("./bubbles");
// const picRoutes = require("./pics");

// Bubble routes
router.use("/bubble", bubbleRoutes);

//Pic routes
// router.use("/pics",picRoutes);

module.exports = router;
