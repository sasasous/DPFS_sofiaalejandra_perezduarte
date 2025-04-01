CREATE DATABASE sousmarket;
USE sousmarket;

CREATE TABLE Usuarios(
usuario_id INT PRIMARY KEY,
nombre VARCHAR(100),
correo VARCHAR(150),
contrasena VARCHAR(50),
fecha_creacion TIMESTAMP
);

CREATE TABLE Productos(
producto_id INT NOT NULL PRIMARY KEY,
nombre VARCHAR(100) NULL,
precio DECIMAL NULL,
fecha_agregado TIMESTAMP NULL
);

CREATE TABLE Carrito(
carrito_id INT PRIMARY KEY,
usuario_id INT,
fecha_creacion TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES Usuarios(usuario_id)
);

CREATE TABLE `sousmarket`.`detalle` (
  `detalle_id` INT NOT NULL,
  `carrito_id` INT NULL,
  `producto_id` INT NULL,
  `cantidad` INT NULL,
  `agregado` TIMESTAMP NULL,
  PRIMARY KEY (`detalle_id`),
  INDEX `FK1_idx` (`producto_id` ASC) VISIBLE,
  INDEX `FK2_idx` (`carrito_id` ASC) VISIBLE,
  CONSTRAINT `FK1`
    FOREIGN KEY (`producto_id`)
    REFERENCES `sousmarket`.`productos` (`producto_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `FK2`
    FOREIGN KEY (`carrito_id`)
    REFERENCES `sousmarket`.`carrito` (`carrito_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


