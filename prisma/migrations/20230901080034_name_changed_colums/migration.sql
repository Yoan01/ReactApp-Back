/*
  Warnings:

  - You are about to drop the column `lattitude` on the `Cities` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Cities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cities" DROP COLUMN "lattitude",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL;
