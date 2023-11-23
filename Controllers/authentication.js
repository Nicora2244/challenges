const express = require("express");
const bcrypt = require("bcryptjs");
const user = require("../models/Usuario");
const { generateJWT } = require("../helpers/jwt");
const User = require("../models/User");

const createUser = async (req, res = express.response) => {
  const { name, email, password } = req.body;
  try {
    let user = await user.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario con ese correo ya existe",
      });
    }

    User = new User(req.body);
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    await user.save();

    res.status(200).json({
      ok: true,
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      e,
    });
  }
};

const register = (req, res = express.response) => {
  const { name, email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "Usuario registrado",
    name,
    email,
    password,
  });
};

const loginUser = async (req, res = express.response) => {
  const { email, password } = req.body;
  try {
    let user = await user.findOne({ email: email });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario NO existe",
      });
    }

    const passwordValid = bcrypt.compareSync(password,user.password)
    if(!passwordValid){
      return res.status(400).json({
        ok:false,
        msg: 'Password is not valid'
      })
    }

    const token = await ( generateJWT(user.id,user.name))
    res.status(200).json({
      ok: true,
      user,
      token
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      ok: false,
      e,
    });
  }
};

const validateToken = async (req, res = express.response) => {
  const {uid,name} = req
  const token = await(generateJWT(uid,name))
  
  res.json({
    ok:true,
    token
  })
};

module.exports = {
  createUser,
  loginUser,
  validateToken,
  register,
};