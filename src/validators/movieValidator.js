import { body, validationResult } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import HttpStatus from 'http-status-codes';

const movieValidator = {
  movie: [
    body('movie', 'Movie must not be empty').isLength({ min: 1 }),

    sanitizeBody('author')
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

export { movieValidator };
