import { Router } from 'express';

import * as moviesController from '../controllers/movies';
import omdbApi from '../middlewares/omdbApi';
import { movieValidator } from '../validators/movieValidator';

const router = Router();

router.get('/', moviesController.fetchAll);
router.post('/', movieValidator, omdbApi, moviesController.create);

export default router;
