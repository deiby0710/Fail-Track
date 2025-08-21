-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombrecompleto` VARCHAR(100) NULL,
    `cedula` VARCHAR(20) NULL,
    `username` VARCHAR(50) NULL,
    `password` VARCHAR(60) NULL,
    `sede` VARCHAR(50) NULL,
    `role` VARCHAR(20) NULL,

    INDEX `Usuarios_username_idx`(`username`),
    INDEX `Usuarios_cedula_idx`(`cedula`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
