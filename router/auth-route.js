const express = require("express");
const router = express.Router();
const validate = require("../middleware/validate-middleware");
const Schema = require("../validator/auto-valiadtor");
const authcontrollers = require("../controllers/auth-controlers");
const authMiddleware = require("../middleware/auth-middelware");

router.route("/").get(authcontrollers.home);

router
  .route("/register")
  .post(validate(Schema.signupSchema), authcontrollers.register);
router
  .route("/login")
  .post(validate(Schema.loginSchema), authcontrollers.login);
router.route("/user").get(authMiddleware, authcontrollers.user);
module.exports = router;
