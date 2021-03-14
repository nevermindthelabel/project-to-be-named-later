import express from 'express';

const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json({ export: true });
});

router.get('/test', async (req, res, next) => {
  res.json({ route: 'test', success: true });
});

router.get('/api/test', async (req, res, next) => {
  res.json({ title: 'A cool title' });
});

export { router };
