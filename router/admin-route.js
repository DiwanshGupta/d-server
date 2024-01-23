const express = require("express");
const {
  getusers,
  getContact,
  deleteuser,
  getuserbyid,
  updateuser,
  deletmesg,
} = require("../controllers/admin-controller");
const authMiddleware = require("../middleware/auth-middelware");
const adminMidlleware = require("../middleware/admin-middleware");
const router = express.Router();

router.route("/user").get(authMiddleware, adminMidlleware, getusers);
router.route("/contact").get(authMiddleware, adminMidlleware, getContact);
router
  .route("/contact/delete/:id")
  .delete(authMiddleware, adminMidlleware, deletmesg);

router.route("/user/:id").get(authMiddleware, adminMidlleware, getuserbyid);

router
  .route("/user/update/:id")
  .patch(authMiddleware, adminMidlleware, updateuser);

router
  .route("/user/delete/:id")
  .delete(authMiddleware, adminMidlleware, deleteuser);

module.exports = router;
