/*
  Warnings:

  - You are about to drop the column `cedula` on the `usuarios` table. All the data in the column will be lost.
  - You are about to drop the column `sede` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Usuarios_cedula_idx` ON `usuarios`;

-- AlterTable
ALTER TABLE `usuarios` DROP COLUMN `cedula`,
    DROP COLUMN `sede`,
    ADD COLUMN `identificacion` VARCHAR(20) NULL,
    ADD COLUMN `punto` VARCHAR(50) NULL;

-- CreateIndex
CREATE INDEX `Usuarios_identificacion_idx` ON `Usuarios`(`identificacion`);
