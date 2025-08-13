import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// // Create a new application
// export const createApplication = async (req: Request, res: Response) => {
//   try {
//     const { userId, countryId, universityId, programId } = req.body;

//     // Ensure the program exists and matches the universityId
//     const program = await prisma.program.findUnique({
//       where: { id: programId },
//       include: { university: true }
//     });

//     if (!program) {
//       return res.status(404).json({ error: 'Program not found' });
//     }

//     if (program.universityId !== universityId) {
//       return res.status(400).json({ error: 'Program does not belong to this university' });
//     }

//     const application = await prisma.application.create({
//       data: {
//         userId,
//         countryId,
//         universityId,
//         programId,
//         status: 'in_progress',
//         currentPhase: 1
//       }
//     });

//     // Parse steps from stored JSON
//     const admissionSteps = JSON.parse(program.admissionSteps || '[]');
//     const visaSteps = JSON.parse(program.visaSteps || '[]');

//     // Create step progress for both phases
//     const stepData = [
//       ...admissionSteps.map((title: string) => ({
//         applicationId: application.id,
//         stepTitle: title,
//         phase: 1,
//       })),
//       ...visaSteps.map((title: string) => ({
//         applicationId: application.id,
//         stepTitle: title,
//         phase: 2,
//       })),
//     ];
    
//     await prisma.stepProgress.createMany({ data: stepData });

//     res.status(201).json(application);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to create application' });
//   }
// };




// Create a new application
export const createApplication = async (req: Request, res: Response) => {
  try {
    const { userId, countryId, universityId, programId } = req.body;

    // Ensure the program exists and matches the universityId
    const program = await prisma.program.findUnique({
      where: { id: programId },
      include: { university: true }
    });

    if (!program) {
      return res.status(404).json({ error: 'Program not found' });
    }

    if (program.universityId !== universityId) {
      return res.status(400).json({ error: 'Program does not belong to this university' });
    }

    // Create the application
    const application = await prisma.application.create({
      data: {
        userId,
        countryId,
        universityId,
        programId,
        status: 'in_progress',
        currentPhase: 1 // Start with phase 1 (admission)
      }
    });

    // Parse only admission steps (phase 1)
    // ❌ Removed visa steps creation here — reason: We only want phase 1 steps at the start
    const admissionSteps = JSON.parse(program.admissionSteps || '[]');

    const stepData = admissionSteps.map((title: string) => ({
      applicationId: application.id,
      stepTitle: title,
      phase: 1,
    }));

    await prisma.stepProgress.createMany({ data: stepData });

    res.status(201).json(application);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create application' });
  }
};

// // Update application phase or status
// export const updateApplicationPhase = async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { currentPhase, status } = req.body;

//     const updated = await prisma.application.update({
//       where: { id },
//       data: {
//         currentPhase,
//         status
//       }
//     });

//     res.json(updated);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to update application' });
//   }
// };



// Update application phase or status
export const updateApplicationPhase = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { currentPhase, status } = req.body;

    // 1️⃣ Get current application with steps
    const app = await prisma.application.findUnique({
      where: { id },
      include: { steps: true, program: true } // Include program so we can load visa steps later
    });

    if (!app) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // 2️⃣ Prevent phase change if there are incomplete steps in current phase
    const incompleteSteps = app.steps.filter(
      step => step.phase === app.currentPhase && !step.completed
    );
    if (incompleteSteps.length > 0) {
      return res.status(400).json({
        error: 'Complete all steps in current phase before moving to the next phase'
      });
    }

    // 3️⃣ If moving from phase 1 → phase 2, create visa steps
    if (app.currentPhase === 1 && currentPhase === 2) {
      const visaSteps = JSON.parse(app.program.visaSteps || '[]');

      const visaStepData = visaSteps.map((title: string) => ({
        applicationId: app.id,
        stepTitle: title,
        phase: 2,
      }));

      await prisma.stepProgress.createMany({ data: visaStepData });
    }

    // 4️⃣ Update the application phase/status
    const updated = await prisma.application.update({
      where: { id },
      data: { currentPhase, status }
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update application' });
  }
};


// // Get applications for a specific user
// export const getApplicationsByUser = async (req: Request, res: Response) => {
//   try {
//     const { userId } = req.params;

//     const applications = await prisma.application.findMany({
//       where: { userId },
//       include: {
//         country: true,
//         university: true,
//         program: true,
//         steps: true
//       }
//     });

//     res.json(applications);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch applications' });
//   }
// };


// Get applications for a specific user
export const getApplicationsByUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const applications = await prisma.application.findMany({
      where: { userId },
      include: {
        country: true,
        university: true,
        program: true,
        steps: true
      }
    });

    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
};


// GET application + steps → verifies the current phase.

// Checks if all steps are completed.

// Prevents skipping phases.

// Automatically adds next phase steps if they don’t exist.

// Updates currentPhase in the Application table.


// Move an application to the next phase if current steps are completed
export const moveToNextPhase = async (req: Request, res: Response) => {
  try {
    const { applicationId } = req.params;

    // 1. Find the application with steps
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
      include: {
        steps: true,
        program: true, // Assuming program contains visa/admission steps info
      },
    });

    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    // 2. Get steps for the current phase
    const currentPhaseSteps = application.steps.filter(
      (step) => step.phase === application.currentPhase
    );

    if (currentPhaseSteps.length === 0) {
      return res.status(400).json({
        error: 'No steps found for the current phase. Cannot proceed.',
      });
    }

    // 3. Check if all steps in current phase are completed
    const allCompleted = currentPhaseSteps.every((step) => step.completed);

    if (!allCompleted) {
      return res.status(400).json({
        error: 'Not all steps in the current phase are completed.',
      });
    }

    // 4. Increment phase
    const nextPhase = application.currentPhase + 1;

    // Optional: limit to 2 phases
    if (nextPhase > 2) {
      return res.status(400).json({
        error: 'Application already at final phase.',
      });
    }

    // 5. Create next phase steps if they don't exist
    const existingNextPhaseSteps = application.steps.filter(
      (step) => step.phase === nextPhase
    );

    if (existingNextPhaseSteps.length === 0) {
      // Here, instead of program.visaSteps, you can hardcode or fetch from config
      const newSteps = [
        { stepTitle: 'Submit visa documents', phase: 2 },
        { stepTitle: 'Visa interview', phase: 2 },
        { stepTitle: 'Receive visa decision', phase: 2 },
      ];

      await prisma.stepProgress.createMany({
        data: newSteps.map((step) => ({
          applicationId: application.id,
          stepTitle: step.stepTitle,
          phase: step.phase,
        })),
      });
    }

    // 6. Update application phase
    const updatedApplication = await prisma.application.update({
      where: { id: application.id },
      data: { currentPhase: nextPhase },
    });

    res.json({
      message: `Application moved to phase ${nextPhase}`,
      application: updatedApplication,
    });
  } catch (error) {
    console.error('Error moving to next phase:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};