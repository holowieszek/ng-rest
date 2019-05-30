import Joi from '@hapi/joi';

import validate from '../utils/validate';
import asyncWrapper from '../utils/asyncWrapper';

const SCHEMA = {
  title: Joi.string()
    .label('title')
    .required()
};

async function movieValidator(req, res, next) {
  const { body } = req;

  const { error } = await asyncWrapper(validate(body, SCHEMA));

  error ? next(error) : next();
}

export { movieValidator };
