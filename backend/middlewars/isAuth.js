const Admin = require("../model/Admin");
const jwt = require("jsonwebtoken")

// authentification to admin account
exports.isAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    const secret = process.env.codesecret;
  
    try {
      var decoded = await jwt.verify(token, secret);
      if (!decoded) {
        res.status(400).json({ msg: "no valid token" });
      }
      const admin = await Admin.findById(decoded._id).select("-password");
      if (!admin) {
        res.status(400).json({ msg: "unauthorized" });
      } else {
        req.admin = admin;
      }
      next();
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  };