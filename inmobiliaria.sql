-- Crear la base de datos
CREATE DATABASE DBInmobiliaria;
go
USE DBInmobiliaria;
go
/*
  USE MASTER
  GO

  DROP DATABASE DBInmobiliaria
  go
*/

-- Crear la tabla de propiedades
CREATE TABLE Propiedades (
  id_propiedad int PRIMARY KEY,
  direccion varchar (30) NOT NULL,
  ciudad int NOT NULL,
  departamento int NOT NULL,
  tipo_propiedad int NOT NULL,
  num_habitaciones int NOT NULL,
  num_banos int NOT NULL,
  estacionamiento int NOT NULL, 
  estado int NOT NULL, 
  tipo_contrato int NOT NULL,
  precio_inicial int NOT NULL,
  comision int NOT NULL,
  precio_final int NOT NULL
);

-- Crear la tabla Estacionamiento
CREATE TABLE Estacionamiento (
  id_estacionamiento int PRIMARY KEY,
  descripcion varchar (30) NOT NULL
);

-- Crear la tabla Comision 
CREATE TABLE Comision (
  id_comision int PRIMARY KEY,
  descricion varchar (30) NOT NULL
);


-- Crear la tabla de estado propiedad
CREATE TABLE EstadoPropiedad (
  id_estado_propiedad int PRIMARY KEY,
  descripcion varchar (30) NOT NULL
);

-- Crear la tabla Ciudad
CREATE TABLE Ciudad (
  id_ciudad int PRIMARY KEY,
  descripcion varchar (30) NOT NULL
);

-- Crear la tabla Departamento
CREATE TABLE Departamento (
  id_departamento int PRIMARY KEY,
  descripcion varchar (30) NOT NULL
);


-- Crear la tabla de tipos de propiedad
CREATE TABLE TiposPropiedad (
  id_tipo_propiedad int PRIMARY KEY,
  nombre varchar (30) NOT NULL
);

-- Crear la tabla de clientes
CREATE TABLE Clientes (
  id_cliente int PRIMARY KEY,
  nombre varchar (30) NOT NULL,
  apellido varchar (30) NOT NULL,
  email varchar (30) NOT NULL,
  tipo_tel int NOT NULL,
  telefono varchar (30) NOT NULL,
  genero int NOT NULL,
  direccion varchar (30) NOT NULL,
  ciudad varchar (30) NOT NULL
);


-- Crear la tabla de empleados
CREATE TABLE Empleados (
  id_empleado int PRIMARY KEY,
  nombre varchar (30) NOT NULL,
  apellido varchar (30) NOT NULL,
  email varchar (30) NOT NULL,
  tipo_tel int NOT NULL,
  telefono varchar (30) NOT NULL,
  genero int NOT NULL,
  cargo int NOT NULL,
  tipo_contrato int NOT NULL,
  sede int NOT NULL,

);

-- Crear la tabla Sede empleados
CREATE TABLE Sede (
  id_Sede int PRIMARY KEY,
  descripcion varchar (30) NOT NULL,
);

-- Crear la tabla cargo empleados
CREATE TABLE Cargo (
  id_cargo int PRIMARY KEY,
  descripcion varchar (30) NOT NULL,
);

-- Crear la tabla de tipos de contrato empleado
CREATE TABLE TiposContrato (
  id_tipo_contrato int PRIMARY KEY,
  nombre varchar (30) NOT NULL
);


-- Crear la tabla Tipo Telefono
Create TABLE Tipo_Tel
(
  id_tipo_tel int Primary Key NOT NULL,
  descripcion  varchar (30) NOT NULL
)
go

-- Crear la tabla Genero
Create TABLE Genero
(
  genero int Primary Key NOT NULL,
  descripcion  varchar (30) NOT NULL
)
go

-- Crear la tabla de Contrato
CREATE TABLE ContratoPropiedad(
  id_contrato_propiedad int PRIMARY KEY,
  descripcion varchar (30) NOT NULL
);

----INSERTAR DATOS---------

---CIUDAD----

INSERT INTO [dbo].[Ciudad]
           ([id_ciudad]
           ,[descripcion])
     VALUES
           (5001, 'Medell�n'),
(5002, 'Abejorral'),
(5004, 'Abriaqu�'),
(5021, 'Alejandr�a'),
(5030, 'Amag�'),
(5031, 'Amalfi'),
(5034, 'Andes'),
(5036, 'Angel�polis'),
(5038, 'Angostura'),
(5040, 'Anor�'),
(5042, 'Anza'),
(5044, 'Apartad�'),
(5045, 'Arboletes'),
(5051, 'Argelia'),
(5055, 'Armenia'),
(5059, 'Barbosa'),
(5060, 'Belmira'),
(5064, 'Bello'),
(5067, 'Betania'),
(5068, 'Betulia'),
(5071, 'Ciudad Bol�var'),
(5072, 'Brice�o'),
(5074, 'Buritic�'),
(5079, 'C�ceres'),
(5086, 'Caicedo'),
(5088, 'Caldas'),
(5091, 'Campamento'),
(5093, 'Ca�asgordas'),
(5101, 'Caracol�'),
(5107, 'Caramanta'),
(5113, 'Carepa'),
(5120, 'El Carmen de Viboral'),
(5125, 'Carolina'),
(5129, 'Caucasia'),
(5134, 'Chigorod�'),
(5138, 'Cisneros'),
(5142, 'Cocorn�'),
(5145, 'Concepci�n'),
(5147, 'Concordia'),
(5150, 'Copacabana'),
(5154, 'Dabeiba'),
(5172, 'Donmat�as'),
(5174, 'Eb�jico'),
(5180, 'El Bagre'),
(5183, 'Entrerr�os'),
(5190, 'Envigado'),
(5197, 'Fredonia'),
(5206, 'Frontino'),
(5212, 'Giraldo'),
(5234, 'Girardota'),
(5240, 'G�mez Plata'),
(5266, 'Guadalupe'),
(5268, 'Guarne'),
(5282, 'Guatap�'),
(5284, 'Heliconia'),
(5306, 'Hispania'),
(5308, 'Itag��'),
(5310, 'Ituango'),
(5313, 'Jard�n'),
(5330, 'Jeric�'),
(5347, 'La Ceja'),
(5353, 'La Estrella'),
(5360, 'La Pintada'),
(5361, 'La Uni�n'),
(5364, 'Liborina'),
(5380, 'Maceo')
GO
select * from ciudad

---DEPARTAMENTO----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[Departamento]
           ([id_departamento]
           ,[descripcion])
     VALUES
           (5,'Antioquia')
GO

---COMISION----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[Comision]
           ([id_comision]
           ,[descricion])
     VALUES
           (1,'5 % de comision'),
		   (2,'10 % de comision'),
		   (3,'15 % de comision')
GO

---Tipo Propiedad----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[TiposPropiedad]
           ([id_tipo_propiedad]
           ,[nombre])
     VALUES
           (10,'Casa'),
		   (20,'Apartamento'),
		   (30,'Aparta Estudio'),
		   (40,'Finca'),
		   (50,'Oficina')
GO


---Estacionamiento----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[Estacionamiento]
           ([id_estacionamiento]
           ,[descripcion])
     VALUES
           (1,'Si cuenta con Estacionamiento'),
		   (2,'No cuenta con Estacionamiento'),
		   (3,'Estacionamiento Compartido')
GO

---Estado Propiedad----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[EstadoPropiedad]
           ([id_estado_propiedad]
           ,[descripcion])
     VALUES
           (5,'Ocupado'),
		   (10,'Disponible')
GO

---Tipo COntrato----

USE [DBInmobiliaria]
GO

INSERT INTO [dbo].[TiposContrato]
           ([id_tipo_contrato]
           ,[nombre])
     VALUES
           (1,'Arriendo'),
		   (2,'Venta')
GO

select * from Propiedades





