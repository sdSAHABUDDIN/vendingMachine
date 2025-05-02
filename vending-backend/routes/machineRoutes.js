import express from 'express';
import { machineFind } from '../controllers/machineController.js';

const router=express.Router();

router.get('/machines',machineFind);

export default router;