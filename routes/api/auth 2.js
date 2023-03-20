const express = require("express");
const { validation } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../schemas/Joi');

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

module.exports = router;