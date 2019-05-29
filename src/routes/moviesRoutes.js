import { Router } from 'express';

import * as moviesController from '../controllers/movies';
import omdbApi from '../middlewares/omdbApi';
import { moviesValidator } from '../validators/moviesValidator';

const router = Router();

router.get('/', moviesController.fetchAll);
router.post('/', moviesValidator, omdbApi, moviesController.create);

export default router;
