import HttpStatus from 'http-status-codes';

import * as moviesService from '../services/moviesServices';

export function fetchAll(req, res, next) {
  return moviesService
    .fetchAllMovies()
    .then(data => res.status(HttpStatus.OK).json({ data }))
    .catch(err => next(err));
}

export function create(req, res, next) {
  moviesService
    .createMovie()
    .then(data => res.status(HttpStatus.CREATED).json({ data }))
    .catch(err => next(err));
}
