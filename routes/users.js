var express = require('express');

const usersModel = require("../models/User");
var router = express.Router();




// router.get('/', function(req, res, next) {
//   res.send('user ajouté');
// });


router.post("/adduser",  async (req, res, next) => {
  try {


      const { name, email, password,role ,enabled} = req.params;


      

      const checkIfuserExist = await usersModel.findOne({ email });
      if (checkIfuserExist) {
          throw new Error("user already exist!");
      }
      const user = new usersModel({


          name:name,
          email:email,
          password:password,
          role:role,
          enabled:enabled,


      });

      user.save();
      res.redirect("http://localhost:5000/users/");
  } catch (error) {
      res.render("error", { message: error.message, error });
  }
}
);



router.get("/", async (req, res, next) => {
  try {
    const user = await usersModel.find();
    res.render("index", { user });
  } catch (error) {
    res.render("error", { message: error.message, error });
  }
});








module.exports = router;
