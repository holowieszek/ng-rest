import { Router } from 'express';
import HttpStatus from 'http-status-codes';

import moviesRoutes from './routes/moviesRoutes';
import commentsRoutes from './routes/commentsRoutes';

const router = Router();

router.get('/', (req, res) => {
  const { title, version } = req.app.locals;

  res.status(HttpStatus.OK).json({ title, version });
});

router.get('/test', (req, res, next) => {
  res.status(200).json('hello world');
});

router.use('/movies', moviesRoutes);
router.use('/comments', commentsRoutes);

export default router;
