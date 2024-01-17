const Joi = require('joi');
 
const SongPayloadSchema = Joi.object({
  title: Joi.string().required(),
  year: Joi.number().integer().required(),
  genre: Joi.string(),
  performer: Joi.string().required(),
  duration: Joi.number(),
});

module.exports = { SongPayloadSchema };