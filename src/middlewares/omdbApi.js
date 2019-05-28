require('dotenv').config({ path: __dirname + '/../.env' });

import axios from 'axios';
import Boom from 'boom';
import asyncWrapper from '../utils/asyncWrapper';

const omdbApi = async (req, res, next) => {
  const { title } = req.body;

  const { error, result } = await asyncWrapper(apiCall(title));

  error !== null ? next(Boom.unauthorized(error.response.data.Error)) : null;
  result.data.Error ? next(Boom.notFound(result.data.Error)) : null;

  res.locals.omdb = result;
  next();
};

const apiCall = title => {
  return axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API}&t=${title}`);
};

export default omdbApi;
