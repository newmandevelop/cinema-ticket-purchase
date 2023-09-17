// seatController.ts
import { Request, Response } from 'express';
import Seat from '../models/seatModel';

export const purchaseSeat = async (req: Request, res: Response) => {
  try {
    const { cinemaId } = req.params;
    const { seatNumber } = req.body;
    
    // Check if the seat is already purchased
    const existingSeat = await Seat.findOne({ cinema: cinemaId, number: seatNumber });
    if (existingSeat && existingSeat.isPurchased) {
      return res.status(400).json({ error: 'Seat is already purchased' });
    }

    // Purchase the seat
    const seat = await Seat.findOneAndUpdate(
      { cinema: cinemaId, number: seatNumber },
      { isPurchased: true },
      { new: true }
    );

    res.status(200).json({ seat });
  } catch (error) {
    res.status(500).json({ error: 'Could not purchase seat' });
  }
};