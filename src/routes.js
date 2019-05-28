import { Router } from 'express';
import HttpStatus from 'http-status-codes';

const router = Router();

router.get('/', (req, res) => {
  res.status(HttpStatus.OK).json({
    app: req.app.locals.title,
    version: req.app.locals.version
  });
});

export default router;
