/*
  Warnings:

  - Added the required column `courseId` to the `Chairs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Chairs" ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Chairs" ADD CONSTRAINT "Chairs_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
