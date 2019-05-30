import { Router } from 'express';
import HttpStatus from 'http-status-codes';

import moviesRoutes from './routes/moviesRoutes';
import commentsRoutes from './routes/commentsRoutes';

const router = Router();

router.get('/', (req, res) => {
  const { title, version } = req.app.locals;

  res.status(HttpStatus.OK).json({ title, version });
});

router.use('/movies', moviesRoutes);
router.use('/comments', commentsRoutes);

export default router;
