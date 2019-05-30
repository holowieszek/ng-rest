import { Router } from 'express';
import * as commentsController from '../controllers/comments';
import { commentValidator } from '../validators/commentValidator';
import { paginationValidator } from '../validators/paginationValidator';

const router = Router();

router.get('/', paginationValidator, commentsController.fetchAll);
router.post('/', commentValidator, commentsController.create);

export default router;
