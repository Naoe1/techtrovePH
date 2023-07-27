import express from 'express';
import lastUpdatedController from '../controllers/lastUpdatedController';
const router = express.Router();

router.get('/', lastUpdatedController.getLastUpdated);

export default router;