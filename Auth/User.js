const user = require("../models/User");
var bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const emailExist = await user.findOne({ email: req.body.email });
    if (emailExist) {
      return res
        .status(400)
        .send({ success: false, message: "User Already Exist" });
    } else {
      var salt = bcrypt.genSaltSync(10);
      var password = bcrypt.hashSync(req.body.password, salt);
      const User = new user({ ...req.body, password: password });
      const UserRegister = await User.save();

      if (UserRegister) {
        return res.status(200).send({
          success: true,
          message: "User Register Successfully",
        });
      } else {
        return res
          .status(500)
          .send({ success: false, message: "Something went Wrong" });
      }
    }
  } catch {
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};

const loginUser = async (req, res) => {
  var { email, password } = req.body;

  try {
    const User = await user.findOne({ email: email });

    if (!User) {
      return res
        .status(400)
        .send({ success: false, message: "User not Registered" });
    } else {
      const login = bcrypt.compareSync(password, User.password);
      if (login === true) {
        return res.status(200).send({
          success: true,
          message: "User Login Successfull",
        });
      } else {
        return res
          .status(400)
          .send({ success: false, message: "Wrong Credentials" });
      }
    }
  } catch (error) {
    return res.status(500).send({ success: false, message: "Server Error" });
  }
};

module.exports = { registerUser, loginUser };
