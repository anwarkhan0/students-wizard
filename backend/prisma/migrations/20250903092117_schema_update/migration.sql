-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "academicAchievements" TEXT,
ADD COLUMN     "age" TEXT,
ADD COLUMN     "budget" TEXT,
ADD COLUMN     "careerGoals" TEXT,
ADD COLUMN     "currentCountry" TEXT,
ADD COLUMN     "currentEducation" TEXT,
ADD COLUMN     "englishLevel" TEXT,
ADD COLUMN     "englishTests" TEXT,
ADD COLUMN     "extracurricular" TEXT,
ADD COLUMN     "fieldOfStudy" TEXT,
ADD COLUMN     "gpa" TEXT,
ADD COLUMN     "institution" TEXT,
ADD COLUMN     "nationality" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "researchExperience" TEXT,
ADD COLUMN     "startDate" TEXT,
ADD COLUMN     "studyLevel" TEXT,
ADD COLUMN     "workExperience" TEXT;

-- CreateTable
CREATE TABLE "public"."ProgramRequirement" (
    "id" TEXT NOT NULL,
    "programId" TEXT NOT NULL,
    "minGpa" DOUBLE PRECISION,
    "requiredEnglishLevel" TEXT,
    "requiredEnglishTest" TEXT,
    "minEnglishScore" DOUBLE PRECISION,
    "requiredStudyLevel" TEXT,
    "requiredFieldOfStudy" TEXT,
    "additionalNotes" TEXT,

    CONSTRAINT "ProgramRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserTargetCountry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,

    CONSTRAINT "UserTargetCountry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserTargetProgram" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "programId" TEXT NOT NULL,

    CONSTRAINT "UserTargetProgram_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProgramRequirement_programId_key" ON "public"."ProgramRequirement"("programId");

-- AddForeignKey
ALTER TABLE "public"."ProgramRequirement" ADD CONSTRAINT "ProgramRequirement_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTargetCountry" ADD CONSTRAINT "UserTargetCountry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTargetCountry" ADD CONSTRAINT "UserTargetCountry_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "public"."Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTargetProgram" ADD CONSTRAINT "UserTargetProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserTargetProgram" ADD CONSTRAINT "UserTargetProgram_programId_fkey" FOREIGN KEY ("programId") REFERENCES "public"."Program"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
