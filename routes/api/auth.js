const express = require("express");
const { validation, authentificate, upload } = require("../../middleware");
const { ctrlWrapper } = require("../../helpers");
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema, joiVerificationSchema } = require('../../schemas/Joi');

const router = express.Router();

router.post("/register", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", validation(joiVerificationSchema), ctrlWrapper(ctrl.resendVerifyEmail))

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));

router.get("/current", authentificate, ctrlWrapper(ctrl.getCurrent));

router.post("/logout", authentificate, ctrlWrapper(ctrl.logout));

router.patch("/avatars", authentificate, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));


module.exports = router;    