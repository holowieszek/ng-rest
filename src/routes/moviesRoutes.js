import { Router } from 'express';

import * as moviesController from '../controllers/movies';
import omdbApi from '../middlewares/omdbApi';

const router = Router();

router.get('/', moviesController.fetchAll);
router.post('/', omdbApi, moviesController.create);

export default router;
