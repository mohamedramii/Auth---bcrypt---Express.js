const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")

const userSchema = require("../models/user");

router.post("/register", async (req, res) => {
  try {
      const user = new userSchema(req.body);
     
      const finduser = await userSchema.findOne({email: req.body.email});    
    if (finduser) {
        return res.status(400).json({ error: "email already exists" });
    }
    const hashedPassword = await bcrypt.hash(user.password , 10)
    user.password = hashedPassword;
    await user.save();

  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = router;
