import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({ export: true });
});

router.get('/test', async (req, res, next) => {
  res.json({ route: 'test', success: true });
});

export { router };
