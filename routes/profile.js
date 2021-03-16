const express = require("express");
const router = express.Router();
const passport = require("passport");

const profileController = require("../controllers/profile_constroller");
const taskcontroller = require("../controllers/task_controller");

router.get("/", profileController.profile);

router.post("/create", taskcontroller.create);

module.exports = router;
