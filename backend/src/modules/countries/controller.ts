import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getAllCountries = async (_req: Request, res: Response) => {
  try {
    const countries = await prisma.country.findMany({
      include: { universities: true }
    });
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

export const createCountry = async (req: Request, res: Response) => {
  try {
    const { name, visaInfo } = req.body;
    const country = await prisma.country.create({
      data: { name, visaInfo }
    });
    res.status(201).json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create country' });
  }
};
