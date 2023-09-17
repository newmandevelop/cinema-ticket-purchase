// cinemaRoutes.ts
import express from 'express';
import { createCinema } from '../controllers/cinemaController';

const router = express.Router();

router.post('/create', createCinema);

export default router;
