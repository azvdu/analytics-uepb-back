/*
  Warnings:

  - You are about to drop the column `chair` on the `Periods` table. All the data in the column will be lost.
  - You are about to drop the column `period` on the `Periods` table. All the data in the column will be lost.
  - Added the required column `periodId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "periodId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Periods" DROP COLUMN "chair",
DROP COLUMN "period";

-- CreateTable
CREATE TABLE "Chairs" (
    "id" SERIAL NOT NULL,
    "periodId" INTEGER NOT NULL,
    "chair" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Chairs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Periods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chairs" ADD CONSTRAINT "Chairs_periodId_fkey" FOREIGN KEY ("periodId") REFERENCES "Periods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
