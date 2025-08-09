import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Create new application
export const createApplication = async (req: Request, res: Response) => {
  try {
    const { userId, countryId, universityId, programId } = req.body;

    const application = await prisma.application.create({
      data: {
        userId,
        countryId,
        universityId,
        programId,
        steps: {
          create: [
            { stepTitle: 'Submit Application Form', phase: 1 },
            { stepTitle: 'Upload Documents', phase: 1 },
            { stepTitle: 'Pay Admission Fee', phase: 1 },
            { stepTitle: 'Apply for Visa', phase: 2 },
            { stepTitle: 'Schedule Visa Interview', phase: 2 },
            { stepTitle: 'Upload Visa Documents', phase: 2 },
          ]
        }
      },
      include: { steps: true }
    });

    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create application' });
  }
};

// Get application with step progress
export const getApplication = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const application = await prisma.application.findFirst({
      where: { userId },
      include: {
        country: true,
        university: true,
        program: true,
        steps: true
      }
    });

    if (!application) {
      return res.status(404).json({ error: 'No application found' });
    }

    res.json(application);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch application' });
  }
};

// Mark a step as complete
export const markStepComplete = async (req: Request, res: Response) => {
  try {
    const { stepId } = req.params;

    const updated = await prisma.stepProgress.update({
      where: { id: stepId },
      data: { completed: true }
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update step' });
  }
};
