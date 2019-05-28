import HttpStatus from 'http-status-codes';

export function fetchAll(req, res, next) {
  res.status(HttpStatus.OK).json('fetch all movies');
}

export function create(req, res, next) {
  res.status(HttpStatus.CREATED).json('create new movie');
}
