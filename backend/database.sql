CREATE DATABASE IF NOT EXISTS `checkpoint4Plantsup_db`;
USE `checkpoint4Plantsup_db`;
-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstname` VARCHAR(100) NOT NULL,
  `alias` VARCHAR(100) NOT NULL,
  `creation_date` DATETIME DEFAULT NOW() 
   );
-- -----------------------------------------------------
-- Table `plant`
-- ----------------------------------------------------
DROP TABLE IF EXISTS `plant`;
CREATE TABLE IF NOT EXISTS `plant` (
  `ID` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `firstname_plant` VARCHAR(100) NOT NULL,
  `family_plant` VARCHAR(100) NOT NULL,
  `description` VARCHAR(550) NULL,
  `add_date` DATETIME DEFAULT NOW(),
  `user_id` INT,  
  FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Insertion des données dans la table "user"

INSERT INTO user (firstname, alias, creation_date)
VALUES
("Tessa", "NelwennV", NOW()),
("Valmont", "Val", NOW());


-- Insertion des données dans la table "plant"

INSERT INTO plant (firstname_plant, family_plant, description, add_date, user_id)
VALUES
("Nyx", "Spathiphyllum (Fleur de lune)", "Ce sont souvent des fleurs dites sensuelles, au parfum naturellement entêtant, enveloppant et charnel. Elles sont souvent dites miellées, épicées ou fruitées.", NOW(), 1),
("Andréa", "Aspidistra", "L'Aspidistra est une plante vivace rhizomateuse à feuillage vert foncé, persistant luisant, dressé et lancéolé. Les feuilles atteignent jusqu'à 60 cm hauteur tandis que la plante s'étale sur environ 50 cm de largeur. Les fleurs minuscules, de couleur pourpre, éclosent au ras du sol.", NOW(), 1),
("Bob", "Aspidistra", "L'Aspidistra est une plante vivace rhizomateuse à feuillage vert foncé, persistant luisant, dressé et lancéolé. Les feuilles atteignent jusqu'à 60 cm hauteur tandis que la plante s'étale sur environ 50 cm de largeur. Les fleurs minuscules, de couleur pourpre, éclosent au ras du sol.", NOW(), 2);
