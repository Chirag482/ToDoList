const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home_controller");
const passport = require("passport");

router.get("/", homeController.home);

router.get("/sign-up", homeController.signUp);
router.get("/sign-in", homeController.signIn);

router.post("/create-user", homeController.create);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/sign-in" }),
  homeController.createSession
);
module.exports = router;
