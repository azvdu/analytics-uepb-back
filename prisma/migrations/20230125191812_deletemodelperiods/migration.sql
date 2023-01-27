/*
  Warnings:

  - You are about to drop the column `periodId` on the `Chairs` table. All the data in the column will be lost.
  - You are about to drop the column `periodId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the `Periods` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `period` to the `Chairs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Chairs" DROP CONSTRAINT "Chairs_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_periodId_fkey";

-- DropForeignKey
ALTER TABLE "Periods" DROP CONSTRAINT "Periods_courseId_fkey";

-- AlterTable
ALTER TABLE "Chairs" DROP COLUMN "periodId",
ADD COLUMN     "period" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "periodId";

-- DropTable
DROP TABLE "Periods";
