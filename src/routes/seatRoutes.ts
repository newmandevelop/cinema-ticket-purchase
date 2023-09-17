// seatRoutes.ts
import express from 'express';
import { purchaseSeat, purchaseConsecutiveSeats } from '../controllers/seatController';

const router = express.Router();

router.post('/:cinemaId/purchase', purchaseSeat);
router.post('/:cinemaId/purchase-consecutive', purchaseConsecutiveSeats);

export default router;