import HttpStatus from 'http-status-codes';

import { returnResponse } from '../utils/response';
import * as moviesService from '../services/moviesServices';

export function fetchAll(req, res, next) {
  return moviesService
    .fetchAllMovies()
    .then(data => returnResponse(res, HttpStatus.OK, data))
    .catch(err => next(err));
}

export function create(req, res, next) {
  moviesService
    .createMovie()
    .then(data => returnResponse(res, HttpStatus.CREATED, data))
    .catch(err => next(err));
}
