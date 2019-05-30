import { body, validationResult } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';
import HttpStatus from 'http-status-codes';

const commentValidator = {
  comment: [
    body('author', 'Author must not be empty').isLength({ min: 1 }),
    body('comment', 'Comment must not be empty').isLength({ min: 1 }),

    sanitizeBody('author')
      .trim()
      .escape(),
    sanitizeBody('comment')
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

export { commentValidator };
