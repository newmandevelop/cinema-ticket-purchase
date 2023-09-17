// seatRoutes.ts
import express from 'express';
import { purchaseSeat } from '../controllers/seatController';

const router = express.Router();

router.post('/:cinemaId/purchase', purchaseSeat);

export default router;