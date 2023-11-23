const { Router } = require("express");
const router = Router();
const {
  createUser,
  loginUser,
  validateToken,
  register,
} = require("../Controllers/authentication.js");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validateCampus.js");

router.post("/", loginUser);

router.post(
  "/new",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña necesita tener mas de 6 digitos").isLength({ min: 6 }),
    validateFields
  ],
  createUser
);

router.post(
  "/register",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña necesita tener mas de 6 digitos").isLength({ min: 6 }),
    validateFields,
  ],
  register
);
router.get("/renew", validateToken);

module.exports = router;