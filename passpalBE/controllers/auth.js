const User = require("../models/User");

const bcrypt = require("bcrypt");
const salt = 10;

const jwt = require("jsonwebtoken");

exports.auth_signup_get = (req, res) => {
    res.render("auth/signup");
}


// exports.auth_signup_post = (req, res) => {
//     res.json("auth/signup")
// }
exports.auth_signup_post = (req, res) => {
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
  console.log(hash);

  user.password = hash;

  // Save user
  user
    .save()
    .then(() => {
      // res.redirect("/auth/signin");
      res.json({ message: "User Created Successfully" });
    })
    .catch((err) => {
      console.log(err);
      res.send("Please try again later.");
    });
}






exports.auth_signin_get = (req, res) => {
    res.render("auth/signin");
};

exports.auth_signin_post = async (req, res) => {
    let { emailAddress, password } = req.body;
  
    console.log(emailAddress);
  
    try {
      let user = await User.findOne({ emailAddress });
      console.log(user);
  
      if (!user) {
        return res.json({ message: "User Not Found" });
      }
  
      // Compare Password
      const isMatch = await bcrypt.compareSync(password, user.password);
      console.log(password);
      console.log(user.password);
  
      if (!isMatch) {
        return res.json({ message: "Password doesnot matched" });
      }
  
      // Generate JWT
  
      const payload = {
        user: {
          id: user._id,
          name: user.firstName
        },
      };
  
      jwt.sign(
        payload,
        process.env.SECRET,
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token }).status(200);
        }
      );
    } catch (error) {
      console.log(error);
      res.json({ message: "Your are not loggedIn !!!" }).status(400);
    }
  };
  
  // HTTP GET - Logout Route - To logout the user
  exports.auth_logout_get = (req, res) => {
    // Invalidate the session
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/signin");
    });
  };
  