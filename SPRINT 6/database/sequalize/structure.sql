CREATE DATABASE sousmarket;
USE sousmarket;

CREATE TABLE Usuario(
usuario_id INT PRIMARY KEY,
nombre VARCHAR(100),
apellido VARCHAR(100),
correo VARCHAR(150),
contrasena VARCHAR(50),
categoria VARCHAR(50),
imagen VARCHAR(255)
);

CREATE TABLE Producto(
producto_id INT NOT NULL PRIMARY KEY,
nombre VARCHAR(100) NOT NULL,
imagen VARCHAR(255) NULL,
categoria VARCHAR(100) NOT NULL,
precio DECIMAL NOT NULL,
fecha_agregado TIMESTAMP NULL
);

CREATE TABLE Carrito(
carrito_id INT PRIMARY KEY,
usuario_id INT,
fecha_creacion TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES Usuario(usuario_id)
);

CREATE TABLE Detalle(
detalle_id INT NOT NULL PRIMARY KEY,
carrito_id INT,
producto_id INT,
fecha_agregado TIMESTAMP,
cantidad DECIMAL,
FOREIGN KEY (carrito_id) REFERENCES Carrito(carrito_id),
FOREIGN KEY (producto_id) REFERENCES Producto(producto_id)
);

