CREATE DATABASE IF NOT EXISTS gelati;
USE gelati;

/* TABLES */
CREATE OR REPLACE TABLE gusti (
  id         int not null auto_increment primary key,
  costo      int not null,
  nome       varchar(32) not null,
  produttore varchar(30) not null
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/* OPERATIONS */
INSERT INTO gusti VALUES
(1, 12, 'Banana', 'Big Smoke'),
(2, 13, 'Biscotto', 'Big Smoke'),
(3, 11, 'Cioccolato', 'Big Smoke'),
(4, 10, 'Cocco', 'Big Smoke'),
(5, 14, 'Fragola', 'Big Smoke'),
(6, 13, 'Puffo', 'Big Smoke'),
(7, 12, 'Vaniglia', 'Big Smoke'),
(8, 15, 'Yogurt', 'Big Smoke'),
(9, 17, 'Frollino', 'Big Smoke');