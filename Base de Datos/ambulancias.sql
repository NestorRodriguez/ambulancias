/*Crear base de datos*/
create database ambulancias;
use ambulancias;
select * from users;
/*Crear tabla rol*/
create table rol (
	id int not null primary key auto_increment,
    namerol varchar(20) not null );
insert into rol (namerol) values ('usuario');
insert into rol (namerol) values ('administrador');
insert into rol (namerol) values ('farmaceuta');

/*Crear usuarios*/
create table users (
	id int not null primary key auto_increment,
    nameuser varchar(20) not null,
	password varchar(20) not null,
    email varchar(60) not null,
    id_rol int not null,
    foreign key (id_rol) references rol (id)
 );
insert into users (nameuser, password, email, id_rol) values ('cvergara', '1234', 'carlos_andrevp@hotmail.com', 1);

/*Código que deben correr en workbeanch 8*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

/*Tablas Ambulancias*/
CREATE TABLE ingreso (
  `idlogin` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `documento` VARCHAR(45) NOT NULL,
  `alias` VARCHAR(50) NOT NULL,
  `rol_idrol` INT NOT NULL,
  PRIMARY KEY (`idlogin`),
  INDEX `fk_ingreso_rol1_idx` (`rol_idrol` ASC) VISIBLE,
  CONSTRAINT `fk_ingreso_rol1`
    FOREIGN KEY (`rol_idrol`) REFERENCES `ambulancias`.`rol` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE paciente (
  `idregistro_paciente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `documento` VARCHAR(45) NOT NULL,
  `tipo_identificacion` VARCHAR(45) NOT NULL,
  `diagnostico` VARCHAR(500) NOT NULL,
  `ingreso_idlogin` INT NOT NULL,
  PRIMARY KEY (`idregistro_paciente`),
  INDEX `fk_registro_paciente_ingreso1_idx` (`ingreso_idlogin` ASC) VISIBLE,
  CONSTRAINT `fk_registro_paciente_ingreso1`
    FOREIGN KEY (`ingreso_idlogin`) REFERENCES `ambulancias`.`ingreso` (`idlogin`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE inventario (
  `paciente_idregistro_paciente` INT NOT NULL,
  `producto_idinventario` INT NOT NULL,
  INDEX `fk_inventario_paciente1_idx` (`paciente_idregistro_paciente` ASC) VISIBLE,
  INDEX `fk_inventario_producto1_idx` (`producto_idinventario` ASC) VISIBLE,
  CONSTRAINT `fk_inventario_paciente1`
    FOREIGN KEY (`paciente_idregistro_paciente`)
    REFERENCES `ambulancias`.`paciente` (`idregistro_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_inventario_producto1`
    FOREIGN KEY (`producto_idinventario`)
    REFERENCES `ambulancias`.`producto` (`idinventario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE producto (
  `idinventario` INT NOT NULL AUTO_INCREMENT,
  `invima` VARCHAR(45) NOT NULL,
  `cantidad` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `estado` ENUM('Aprobado', 'Rechazado', 'Pendiente') NOT NULL,
  `elaboracion` DATE NOT NULL,
  `vencimiento` DATE NOT NULL,
  PRIMARY KEY (`idinventario`))
ENGINE = InnoDB;