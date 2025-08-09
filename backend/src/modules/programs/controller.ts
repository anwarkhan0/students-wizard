import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getProgramsByUniversity = async (req: Request, res: Response) => {
  try {
    const { universityId } = req.params;
    const programs = await prisma.program.findMany({
      where: { universityId }
    });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
};

export const createProgram = async (req: Request, res: Response) => {
  try {
    const { name, universityId, admissionSteps, visaSteps} = req.body;
    const newProgram = await prisma.program.create({
      data: {
        name,
        universityId,
        admissionSteps: JSON.stringify(admissionSteps || []),
        visaSteps: JSON.stringify(visaSteps || [])
      }
    });
    res.status(201).json(newProgram);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create program' });
  }
}
// export const updateProgram = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { name, universityId } = req.body;
//     const updatedProgram = await prisma.program.update({
//       where: { id: Number(id) },
//       data: { name, universityId }
//     });
//     res.json(updatedProgram);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to update program' });
//   }
// }
