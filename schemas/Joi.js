const Joi = require("joi");

const joiContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean()
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required()
});

const joiRegisterSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  // subscription: Joi.string()
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
})

module.exports = {
  joiContactSchema,
  updateFavoriteSchema,
  joiRegisterSchema,
  joiLoginSchema
};