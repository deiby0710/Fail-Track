-- CreateTable
CREATE TABLE `RegistroErrores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `tipoError` VARCHAR(191) NOT NULL,
    `punto` VARCHAR(191) NOT NULL,
    `modalidad` VARCHAR(191) NOT NULL,
    `fecha` DATETIME(3) NOT NULL,
    `eps` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `RegistroErrores_fecha_idx`(`fecha`),
    INDEX `RegistroErrores_tipoError_idx`(`tipoError`),
    INDEX `RegistroErrores_punto_idx`(`punto`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Devoluciones` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaEnvio` DATETIME(3) NOT NULL,
    `fechaDevolucion` DATETIME(3) NULL,
    `numFactura` VARCHAR(191) NOT NULL,
    `punto` VARCHAR(191) NOT NULL,
    `tipoContrato` VARCHAR(191) NOT NULL,
    `facturaNueva` VARCHAR(191) NULL,
    `modalidad` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Devoluciones_fechaEnvio_idx`(`fechaEnvio`),
    INDEX `Devoluciones_punto_idx`(`punto`),
    INDEX `Devoluciones_tipoContrato_idx`(`tipoContrato`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(100) NULL,
    `identificacion` VARCHAR(20) NULL,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(60) NULL,
    `punto` VARCHAR(50) NULL,
    `role` VARCHAR(20) NULL,

    UNIQUE INDEX `Usuarios_username_key`(`username`),
    INDEX `Usuarios_identificacion_idx`(`identificacion`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
