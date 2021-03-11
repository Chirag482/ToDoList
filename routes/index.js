const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");

router.get("/", homeController.home);

router.get("/sign-up", homeController.signUp);
router.get("/sign-in", homeController.signIn);

router.post("/create-user", homeController.create);
module.exports = router;
