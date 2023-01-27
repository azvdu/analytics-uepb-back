/*
  Warnings:

  - Added the required column `period` to the `Periods` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Periods" ADD COLUMN     "period" INTEGER NOT NULL;
