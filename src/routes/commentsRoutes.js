import { Router } from 'express';
import * as commentsController from '../controllers/comments';
import { commentValidator } from '../validators/commentValidator';

const router = Router();

router.get('/', commentsController.fetchAll);
router.post('/', commentValidator, commentsController.create);

export default router;
