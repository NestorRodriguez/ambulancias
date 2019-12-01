/*Crear base de datos*/
create database ambulancias;
use ambulancias;

/*Código que deben correr en workbeanch 8*/
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '12345';

/*Crear tabla rol*/
create table amb_rol (
	id INT(11) not null primary key auto_increment,
    namerol varchar(20) not null
    );
select * from amb_rol;
insert into amb_rol (namerol) values ('administrador');
insert into amb_rol (namerol) values ('farmaceuta');
insert into amb_rol (namerol) values ('usuario');


/*Crear usuarios*/
CREATE TABLE users (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nameuser` VARCHAR(20) NOT NULL,
  `password` VARCHAR(20) NOT NULL,
  `id_rol` INT(11) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_rol`) REFERENCES `ambulancias`.`amb_rol` (`id`))
ENGINE = InnoDB;
select * from users;
insert into users (nameuser, password, id_rol) values ('administrador', '1234', 1);
insert into users (nameuser, password, id_rol) values ('farmaceuta', '2345', 2);
insert into users (nameuser, password, id_rol) values ('usuario', '3456', 3);

CREATE TABLE IF NOT EXISTS `ambulancias`.`registro_paciente` (
  `idregistro_paciente` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `documento` VARCHAR(45) NOT NULL,
  `tipo_identificacion` VARCHAR(45) NOT NULL,
  `diagnostico` VARCHAR(500) NOT NULL,
  `users_id` INT(11) NOT NULL,
  PRIMARY KEY (`idregistro_paciente`),
  INDEX `fk_registro_paciente_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_registro_paciente_users1` FOREIGN KEY (`users_id`) REFERENCES `ambulancias`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `ambulancias`.`producto` (
  `idinventario` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `elaboracion` DATE NOT NULL,
  `vencimiento` DATE NOT NULL,
  `invima` VARCHAR(45) NOT NULL,
  `cantidad` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idinventario`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

CREATE TABLE IF NOT EXISTS `ambulancias`.`producto_has_registro_paciente` (
  `producto_idinventario` INT(11) NOT NULL,
  `registro_paciente_idregistro_paciente` INT(11) NOT NULL,
  `fecha_evento` DATE NULL,
  INDEX `fk_producto_has_registro_paciente_registro_paciente1_idx` (`registro_paciente_idregistro_paciente` ASC, `fecha_evento` ASC) VISIBLE,
  INDEX `fk_producto_has_registro_paciente_producto1_idx` (`producto_idinventario` ASC) VISIBLE,
  CONSTRAINT `fk_producto_has_registro_paciente_producto1`
    FOREIGN KEY (`producto_idinventario`)
    REFERENCES `ambulancias`.`producto` (`idinventario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_producto_has_registro_paciente_registro_paciente1`
    FOREIGN KEY (`registro_paciente_idregistro_paciente`)
    REFERENCES `ambulancias`.`registro_paciente` (`idregistro_paciente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;