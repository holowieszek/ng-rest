import { Router } from 'express';

import * as moviesController from '../controllers/movies';

const router = Router();

router.get('/', moviesController.fetchAll);

router.post('/', moviesController.create);

export default router;
