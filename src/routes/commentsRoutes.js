import { Router } from 'express';
import * as commentsController from '../controllers/comments';

const router = Router();

router.get('/', commentsController.fetchAll);
router.post('/', commentsController.create);

export default router;
