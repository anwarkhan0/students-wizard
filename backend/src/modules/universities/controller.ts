import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getUniversitiesByCountry = async (req: Request, res: Response) => {
  try {
    const { countryId } = req.params;
    const universities = await prisma.university.findMany({
      where: { countryId },
      include: { programs: true }
    });
    res.json(universities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch universities' });
  }
};

export const createUniversity = async (req: Request, res: Response) => {
  try {
    const { name, countryId } = req.body;
    const newUniversity = await prisma.university.create({
      data: { name, countryId}
    });
    res.status(201).json(newUniversity);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create university' });
  }
};

