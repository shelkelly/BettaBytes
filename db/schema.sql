### Schema

USE bettas_db;

CREATE TABLE bettas
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(50) NOT NULL,
	gender varchar(7) NOT NULL,
    imageurl varchar(250) NOT NULL,
    price int NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM bettas_db.bettas;
