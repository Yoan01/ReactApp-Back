/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Test";

-- CreateTable
CREATE TABLE "Articles" (
    "id" SERIAL NOT NULL,
    "img" TEXT,
    "title" TEXT,
    "link" TEXT,
    "text" TEXT,

    CONSTRAINT "Articles_pkey" PRIMARY KEY ("id")
);
