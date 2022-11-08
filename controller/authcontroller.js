import User from "../models/User.js";

export const register = async (req, res, next) => {
  try {
    const newUser = new User({
      fullname: req.body.fullname,
      email: req.body.email,
      password: req.body.password
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
