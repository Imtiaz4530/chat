import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.headers.token;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized, Try again later!",
      });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedToken) {
      return res.status(401).json({ error: "Unauthorize - Invalid Token!" });
    }

    const user = await User.findById(decodedToken.id).select("-password");

    if (!user) {
      return res.status(404).json({ error: "User Not Found!" });
    }

    req.user = user;

    next();
  } catch (e) {
    console.error("Error in protectRoute:", e.message);
    res.json({ success: false, message: e.message });
  }
};

export default protectRoute;

e.message(
  new Message(
    "There is not user allowed like that, And You can not create a user "
  )
);
