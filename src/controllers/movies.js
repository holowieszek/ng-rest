import HttpStatus from 'http-status-codes';

import { returnResponse } from '../utils/response';
import * as moviesService from '../services/moviesServices';
import asyncWrapper from '../utils/asyncWrapper';

export async function fetchAll(req, res, next) {
  const { page, limit } = req.query;

  const { error, result } = await asyncWrapper(moviesService.fetchAllMovies(page, limit));

  !error ? returnResponse(res, HttpStatus.OK, result) : next(error);
}

export async function create(req, res, next) {
  const { error, result } = await asyncWrapper(moviesService.createMovie(res.locals.omdb));

  !error ? returnResponse(res, HttpStatus.CREATED, result) : next(error);
}
