const express = require('express');
const userModel = require('../models/userSchema');
const router = express.Router()

router.post('/users', async (req, res) => {
    const user = new userModel(req.body);
    try {
      await user.save((err) => {
        if(err){
          res.send(err)
        }else{
          res.send(user);
        }
      });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  module.exports = router