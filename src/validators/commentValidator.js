import Joi from 'joi';

import validate from '../utils/validate';
import asyncWrapper from '../utils/asyncWrapper';

const SCHEMA = {
  author: Joi.string()
    .label('author')
    .required(),
  comment: Joi.string()
    .label('comment')
    .required(),
  movieId: Joi.number()
    .label('movieId')
    .required()
};

async function commentValidator(req, res, next) {
  const { body } = req;

  const { error } = await asyncWrapper(validate(body, SCHEMA));

  error ? next(error) : next();
}

export { commentValidator };
