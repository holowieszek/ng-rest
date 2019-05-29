import HttpStatus from 'http-status-codes';

import { returnResponse } from '../utils/response';
import * as commentsService from '../services/commentsService';
import asyncWrapper from '../utils/asyncWrapper';

export async function fetchAll(req, res, next) {
  const { error, result } = await asyncWrapper(commentsService.fetchAllComments());

  !error ? returnResponse(res, HttpStatus.OK, result) : next(error);
}

export async function create(req, res, next) {
  const { error, result } = await asyncWrapper(commentsService.createComment(req.body));

  !error ? returnResponse(res, HttpStatus.CREATED, result) : next(error);
}
