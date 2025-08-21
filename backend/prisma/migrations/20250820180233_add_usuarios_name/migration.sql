/*
  Warnings:

  - You are about to drop the column `nombrecompleto` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `nombrecompleto`,
    ADD COLUMN `nombre` VARCHAR(100) NULL;
