import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Movies GET'
  });
});

router.post('/', (req, res) => {
  res.status(201).json({
    message: 'Movies POST'
  });
});

export default router;
