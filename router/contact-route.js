const express = require("express");
const router = express.Router();
const contact = require("../controllers/contact-contoller");

router.route("/contact").post(contact);

module.exports = router;
