const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized HTTp ,Token not found" });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isverified = jwt.verify(jwtToken, process.env.Jwtoken);
    const userdata = await User.findOne({ email: isverified.email }).select({
      password: 0,
    });

    req.user = userdata;
    req.token = token;
    req.userId = userdata._id;

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized.Invalid token" });
  }
};

module.exports = authMiddleware;
