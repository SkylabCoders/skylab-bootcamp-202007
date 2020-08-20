/* TODO - 2 TABLES WITH FOREIGN KEYS FOR EXTERNAL REFERENCE

CREATE TABLE roles (
    id INT NOT NULL,
    role VARCHAR(50),
    PRIMARY KEY (id)
)

INSERT INTO roles (id, role) VALUES
(1, 'final boss'),
(2, 'minion'),
(3, 'heroes wannabe'),
(4, 'ande(r)fain');

CREATE TABLE skylabers (
	id INT IDENTITY(0,1) NOT NULL,
    role VARCHAR(50) NOT NULL,
	name VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NOT NULL,
	lastName VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	age INT NULL,
	birthDate date NULL,
	city VARCHAR(100) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	country VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	bank VARCHAR(20) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	gender VARCHAR(10) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	likesPets BIT NULL,
    challenges INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role) REFERENCES roles(idRole)
)
*/

CREATE TABLE skylabers
(
	id INT IDENTITY(0,1) NOT NULL,
	role VARCHAR(50) NOT NULL,
	name VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NOT NULL,
	lastName VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	age INT NULL,
	birthDate date NULL,
	city VARCHAR(100) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	country VARCHAR(50) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	bank VARCHAR(20) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	gender VARCHAR(10) COLLATE SQL_Latin1_General_CP1_CI_AI NULL,
	likesPets BIT NULL,
	challenges INT,
	PRIMARY KEY (id),
)

INSERT INTO skylabers
	(id, role, name, lastName, age, birthDate, city, country, bank, gender, likesPets, challenges)
VALUES
	(1, 'hero wannabe', 'Francesc', 'Brugarolas', 39, '1981-03-04', 'Barcelona', 'Spain', 'BBVA', 'male', 1, 9654),
	(2, 'hero wannabe', 'Alex', 'Larrañaga', 30, '1990-01-01', 'Azpeitia', 'Euskal Herria', 'HVSCA', 'male', 1, 486),
	(3, 'hero wannabe', 'Gerard', 'Ramon', 25, '1994-09-11', 'Granu', 'Spain', 'Cayman Islands Bank', 'male', 1, 9154),
	(4, 'hero wannabe', 'Martí', 'Gran', 44, '1975-06-09', 'Ullastrell', 'Spain', 'La Caixa', 'male', 1, 487),
	(5, 'hero wannabe', 'Jordi', 'Muñoz', 34, '1984-02-24', 'Barcelona', 'Catalunya', 'Solomon islands', 'male', 1, 654),
	(6, 'hero wannabe', 'Fernando', 'Valdivielso', 37, '1982-09-29', 'Barcelona', 'Spain', 'Caiman Islands Bank', 'male', 1, 376),
	(7, 'final boss', 'David', 'Monreal', 45, '1975-01-25', 'Barcelona', 'Antigua y Barbuda', 'Virgin Islands', 'male', 1, NULL),
	(8, 'final boss', 'Dianinha', 'Expósito', 44, '1976-04-29', 'Masnou', 'Spain', 'Andorra', 'female', 1, NULL),
	(9, 'hero wannabe', 'Esther', 'Morillo', 40, '1979-09-21', 'Palma', 'Spain', 'Isle of Man', 'female', 1, 869),
	(10, 'hero wannabe', 'Gemma', 'Sanz', 25, '1995-08-10', 'Sabadell', 'Catalunya', 'Liechenstein', 'female', 0, 769),
	(11, 'hero wannabe', 'Santiago', 'Robinet', 30, '1990-04-28', 'La Plata', 'Argentina', 'Luxemburgo', 'male', 1, 691),
	(12, 'hero wannabe', 'Vanesa', 'Gómez', 29, '1990-09-06', 'Barcelona', 'Spain', 'Bermudas', 'female', 1, 769),
	(13, 'hero wannabe', 'Dani', 'Alonso', 35, '1985-06-13', 'Stormwind', 'Azeroth', 'Mauritius', 'male', 1, 436),
	(14, 'hero wannabe', 'Anna', 'Codina', 29, '1991-08-16', 'La Seu', 'The Shire', 'Andorra', 'female', 1, 6215),
	(15, 'hero wannabe', 'Aleix', 'Sanllehy', 30, '1990-02-18', 'Sant Boi', 'Titan', 'Seychelles', 'male', 1, 213),
	(16, 'hero wannabe', 'Gabriel', 'Penalva', 29, '1991-03-25', 'Barcelona', 'Vegeta', 'UAE', 'male', 1, 789),
	(17, 'hero wannabe', 'Ramon', 'Saura', 35, '1984-09-08', 'Maó', 'Balear', 'Gibraltar', 'male', 1, 546),
	(18, 'hero wannabe', 'Simón', 'Besteiro', 26, '1994-05-07', 'Barcelona', 'Spain', 'Abanca', 'male', 1, 987),
	(19, 'minion', 'Gilberto', 'Cao', NULL, NULL, 'Barcelona', 'Cuba', NULL, 'male', 1, NULL),
	(20, 'hero wannabe', 'Dani', 'Alcalà', NULL, NULL, 'Barcelona', 'Spain', NULL, 'male', 1, 345),
	(21, 'hero wannabe', 'Víctor', 'Alemany', NULL, NULL, 'Granu', 'Spain', NULL, 'male', 1, 987),
	(22, 'hero wannabe', 'Pablo', 'Hortelano', NULL, NULL, 'Cuenca', 'Spain', NULL, 'male', 1, 165),
	(23, 'minion', 'Llorch', 'Genove', NULL, NULL, 'Sant Boi', 'Spain', NULL, 'male', 1, NULL),
	(24, 'minion', 'Betho', 'Manzano', NULL, NULL, 'Curnallá', 'Spain', NULL, 'male', 1, NULL),
	(25, 'ande(r)fain', 'Ander', 'Fain', NULL, NULL, 'Dormitorio de Adri', 'Skylab', NULL, 'male', 1, 3615482),
	(26, 'hero wannabe', 'Martí', 'Petit', NULL, NULL, 'Barcelona', 'Catalonia is not', NULL, 'male', 1, 768);