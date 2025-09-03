import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters.charAt(randomIndex);
  }
  return result;
}

export const register = async (req: Request, res: Response) => {
  try {
    const {
      email,
      name,
      // Profile
      age,
      nationality,
      currentCountry,
      phone,
      currentEducation,
      gpa,
      fieldOfStudy,
      institution,
      academicAchievements,
      englishLevel,
      englishTests,
      studyLevel,
      startDate,
      budget,
      workExperience,
      researchExperience,
      extracurricular,
      careerGoals,
    } = req.body;

    // Basic validation and normalization
    if (!email || typeof email !== "string") {
      return res.status(400).json({ message: "Email is required" });
    }
    const normalizedEmail = email.trim().toLowerCase();

    console.log("Register attempt for email:", normalizedEmail);

    // // Prevent duplicate creation
    // const existingUser = await prisma.user.findUnique({
    //   where: { email: normalizedEmail },
    // });
    // if (existingUser) {
    //   return res.status(409).json({ message: "Email already in use" });
    // } else {
    //   const password = generateRandomString(10);
    //   const hashedPassword = await bcrypt.hash(password, 10);

    //   const user = await prisma.user.create({
    //     data: {
    //       name,
    //       email: normalizedEmail,
    //       password: hashedPassword,
    //       // Profile
    //       age,
    //       nationality,
    //       currentCountry,
    //       phone,
    //       currentEducation,
    //       gpa,
    //       fieldOfStudy,
    //       institution,
    //       academicAchievements,
    //       englishLevel,
    //       englishTests,
    //       studyLevel,
    //       startDate,
    //       budget,
    //       workExperience,
    //       researchExperience,
    //       extracurricular,
    //       careerGoals,
    //     },
    //   });

    
    // Use a transaction to perform the check and creation atomically.
    // By throwing an error inside the transaction, we ensure it's rolled back
    // and can be handled correctly in the outer try...catch block.
    await prisma.$transaction(async (tx) => {
      const existingUser = await tx.user.findUnique({
        where: { email: normalizedEmail },
      });

      if (existingUser) {
        // Instead of returning a response here, we throw an error.
        // This causes the transaction to fail and is caught by the outer catch block.
        throw new Error('Email already in use.');
      }

      const password = generateRandomString(10);
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await tx.user.create({
        data: {
          name,
          email: normalizedEmail,
          password: hashedPassword,
          // Profile
          age,
          nationality,
          currentCountry,
          phone,
          currentEducation,
          gpa,
          fieldOfStudy,
          institution,
          academicAchievements,
          englishLevel,
          englishTests,
          studyLevel,
          startDate,
          budget,
          workExperience,
          researchExperience,
          extracurricular,
          careerGoals,
        },
      });

      // The response is now sent only after the transaction is successfully committed.
      res.status(201).json(user);
    });

    //   res.status(201).json(user);
    // }
  } catch (error: any) {
    console.error("Register error:", error);

    // Prisma unique constraint
    if (error?.code === "P2002") {
      // log target for debugging
      console.error("Unique constraint target:", error.meta?.target);
      return res.status(409).json({ message: "Email already in use." });
    }

    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !user.password)
      return res.status(400).json({ message: "Invalid credentials" });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );
    res.json({ token });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
