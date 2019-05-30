import { query, validationResult } from 'express-validator/check';
import { sanitizeQuery } from 'express-validator/filter';
import HttpStatus from 'http-status-codes';

const paginationValidator = {
  pagination: [
    query('page', 'Page must be higher than 0')
      .optional()
      .isInt({ min: 1 }),
    query('limit', 'Limit must be higher than 0')
      .optional()
      .isInt({ min: 1 }),

    sanitizeQuery('page')
      .trim()
      .escape(),
    sanitizeQuery('limit')
      .trim()
      .escape(),

    (req, res, next) => {
      const validation = validationResult(req);

      if (!validation.isEmpty()) {
        return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
          errors: validation.mapped()
        });
      }

      next();
    }
  ]
};

export { paginationValidator };
