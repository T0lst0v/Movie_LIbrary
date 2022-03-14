const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const pgp = require("pg-promise")();
// const DB = pgp(process.env.POSTGRES);
const DB = require("../utils/db");

//Generate JWT
const jToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

//*desc user Registration
//*route /db/user/register
//*access PUBLIC
const userRegister = async (req, res) => {
  try {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPass = req.body.password;

    //check for empty fields
    if (!userName || !userEmail || !userPass) {
      res.json({ message: "All fields are Required " });
      return;
    }

    //finding  user in DB
    const usersInDB = await DB.any("SELECT user_id FROM users WHERE email = $1", [userEmail]);

    //if user not exist in DB
    if (usersInDB.length !== 1) {
      //register user with encrypting password
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(userPass, salt, async (err, hash) => {
          const newUser = await DB.none(`INSERT INTO users(name, email, password) VAlUES($1, $2, $3)`, [userName, userEmail, hash]);
          res.json({ user: newUser, message: "user created" });
        });
      });
    } else {
      res.json({ message: "already exist" });
    }
  } catch (error) {
    res.json({ error });
  }
};

//*desc user Login
//*route /db/user/login
//*access PUBLIC
const userLogin = async (req, res) => {
  try {
    const userEmail = req.body.email;
    const userPass = req.body.password;

    //check for empty fields
    if (!userEmail || !userPass) {
      res.json({ message: "All fields are Required " });
      return;
    }

    //getting user form DB and deconstruct it as single object from array of one object
    const [userInDB] = await DB.any(`SELECT * FROM users WHERE email=$1`, [userEmail]);

    //if user not exist in DB
    if (!userInDB) {
      res.json({ message: "user does not exist" });
      return;
    }

    //checking if  entered email matched with existing in db
    if (userInDB.email === userEmail) {
      //compering entered password with existing in DB
      bcrypt.compare(userPass, userInDB.password, (err, result) => {
        if (result) {
          //creating JWT based on Id of the user
          const token = jToken(userInDB.user_id);
          res.json({ message: "LOGGED in", token });
        } else {
          res.json({ message: "wrong password" });
        }
      });
    }
  } catch (error) {
    res.json({ message: error });
  }
};

//*desc user Profile
//*route /db/user/info
//*access Privet
const userInfo = asyncHandler(async (req, res) => {
  res.send("Profile");
});

module.exports = {
  userRegister,
  userLogin,
  userInfo,
};
