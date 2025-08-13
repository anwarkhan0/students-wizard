// src/modules/stepProgress/controller.ts
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// Helper to check if all steps in a phase are complete
async function checkAndUpdateApplicationPhase(applicationId: string, phase: number) {
  const steps = await prisma.stepProgress.findMany({
    where: { applicationId, phase },
  });

  if (steps.length > 0 && steps.every(step => step.completed)) {
    if (phase === 1) {
      // Move to visa phase
      await prisma.application.update({
        where: { id: applicationId },
        data: { currentPhase: 2 },
      });
    } else if (phase === 2) {
      // Mark application as completed
      await prisma.application.update({
        where: { id: applicationId },
        data: { status: 'completed' },
      });
    }
  }
}


// Add a step to an application
export const addStep = async (req: Request, res: Response) => {
  try {
    const { stepTitle, phase } = req.body;
    const { applicationId } = req.params;

    const newStep = await prisma.stepProgress.create({
      data: {
        applicationId,
        stepTitle,
        phase,
      },
    });

    res.status(201).json(newStep);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add step' });
  }
};

// Get all steps for an application
export const getStepsByApplication = async (req: Request, res: Response) => {
  try {
    const { applicationId } = req.params;

    const steps = await prisma.stepProgress.findMany({
      where: { applicationId },
    });

    res.json(steps);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch steps' });
  }
};

// Mark a step as completed or not
export const updateStepCompletion = async (req: Request, res: Response) => {
  try {
    const { stepId } = req.params;
    const { completed } = req.body;

    const updatedStep = await prisma.stepProgress.update({
      where: { id: stepId },
      data: { completed },
    });

     // After updating a step, check if phase is complete
    await checkAndUpdateApplicationPhase(updatedStep.applicationId, updatedStep.phase);

    res.json(updatedStep);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update step' });
  }
};




// ✅ Mark a step as completed
export const completeStep = async (req: Request, res: Response) => {
  try {
    const { stepId } = req.params;

    // 1️⃣ Find the step first
    const step = await prisma.stepProgress.findUnique({
      where: { id: stepId },
      include: { application: true } // We include application to check phase later
    });

    if (!step) {
      return res.status(404).json({ error: 'Step not found' });
    }

    // 2️⃣ Update step as completed
    const updatedStep = await prisma.stepProgress.update({
      where: { id: stepId },
      data: { completed: true }
    });

    // 3️⃣ (Optional) Check if all steps in this phase are completed
    const incompleteSteps = await prisma.stepProgress.findMany({
      where: {
        applicationId: step.applicationId,
        phase: step.phase,
        completed: false
      }
    });

    // If no incomplete steps remain, you could auto-move to next phase
    // Uncomment this block if you want automatic phase progression
    /*
    if (incompleteSteps.length === 0) {
      await prisma.application.update({
        where: { id: step.applicationId },
        data: { currentPhase: step.phase + 1 }
      });
    }
    */

    res.json({
      message: 'Step marked as completed',
      step: updatedStep
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to complete step' });
  }
};