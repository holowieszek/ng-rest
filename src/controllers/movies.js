import HttpStatus from 'http-status-codes';

import { returnResponse } from '../utils/response';
import * as moviesService from '../services/moviesServices';
import asyncWrapper from '../utils/asyncWrapper';

export async function fetchAll(req, res, next) {
  const { error, data } = await asyncWrapper(moviesService.fetchAllMovies());

  !error ? returnResponse(res, HttpStatus.CREATED, data) : next(error);
}

export async function create(req, res, next) {
  const { name } = req.body;

  const { error, data } = await asyncWrapper(moviesService.createMovie(name));

  !error ? returnResponse(res, HttpStatus.CREATED, data) : next(error);
}
