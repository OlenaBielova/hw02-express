const express = require("express");
const { validation, authentificate } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../schemas/Joi');

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authentificate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authentificate, ctrlWrapper(ctrl.logout));

module.exports = router;    