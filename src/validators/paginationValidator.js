import Joi from '@hapi/joi';

import validate from '../utils/validate';
import asyncWrapper from '../utils/asyncWrapper';

const SCHEMA = {
  page: Joi.number().positive(),
  limit: Joi.number().positive()
};

async function paginationValidator(req, res, next) {
  const { query } = req;

  const { error } = await asyncWrapper(validate(query, SCHEMA));

  error ? next(error) : next();
}

export { paginationValidator };
