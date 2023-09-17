// cinemaController.ts
import { Request, Response } from 'express';
import Cinema from '../models/cinemaModel';

export const createCinema = async (req: Request, res: Response) => {
  try {
    const { seats } = req.body;
    const cinema = new Cinema({ seats });
    await cinema.save();
    res.status(201).json({ cinema });
  } catch (error) {
    res.status(500).json({ error: 'Could not create cinema' });
  }
};