const express = require('express');
const router = express.Router();
const { joiContactSchema, updateFavoriteSchema } = require('../../schemas/Joi');
const { validation, isValidId } = require('../../middleware');
const { ctrlWrapper } = require("../../helpers");
// const { listContacts, getContactById, addContact, updateContact, updateStatusContact, removeContact} = require('../../controllers');
const { contacts: ctrl } = require('../../controllers');

// router.get("/", ctrlWrapper(controllers));

// router.get("/:id", isValidId, ctrlWrapper(controllers.getContactById));

// router.post("/", validation(joiContactSchema), ctrlWrapper(controllers.addContact));

// router.put("/:id", isValidId, validation(joiContactSchema), ctrlWrapper(controllers.updateContact));

// router.patch("/:id/favorite", isValidId, validation(updateFavoriteSchema), ctrlWrapper(controllers.updateStatusContact));

// router.delete("/:id", isValidId, ctrlWrapper(controllers.removeContact));

router.get("/", ctrlWrapper(ctrl.listContacts));

router.get("/:id", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validation(joiContactSchema), ctrlWrapper(ctrl.addContact));

router.put("/:id", isValidId, validation(joiContactSchema), ctrlWrapper(ctrl.updateContact));

router.patch("/:id/favorite", isValidId, validation(updateFavoriteSchema), ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:id", isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
