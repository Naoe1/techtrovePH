import express from 'express';
import listController from '../controllers/listController';
const router = express.Router();

router.get('/', listController.getLinkID);

router.post('/', listController.saveList)

router.get('/:linkId', listController.getList)


export default router;