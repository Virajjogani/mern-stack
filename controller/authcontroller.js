import User from "../models/User.js";
import bcrypt from "bcryptjs"

export const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: hash
    });
    await newUser.save();
    res.status(200).send({
      msg: "User Created successfully",
      status: 200
    });
  } catch (error) {
    next(error);
  }
};
