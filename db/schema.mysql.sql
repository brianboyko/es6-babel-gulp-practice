-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'question'
-- 
-- ---

DROP TABLE IF EXISTS `question`;
    
CREATE TABLE `question` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `deck_id` INTEGER NULL DEFAULT NULL,
  `author_id` INTEGER NULL DEFAULT NULL,
  `type` VARCHAR(255) NULL DEFAULT NULL,
  `question` MEDIUMTEXT NULL DEFAULT NULL,
  `points` INT NULL DEFAULT NULL,
  `metadata_json` MEDIUMTEXT NULL DEFAULT NULL,
  `correct_answer` MEDIUMTEXT NULL DEFAULT NULL,
  `acceptable_answers_json` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'decks'
-- 
-- ---

DROP TABLE IF EXISTS `decks`;
    
CREATE TABLE `decks` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `creator_id` INTEGER NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `topic` VARCHAR(255) NULL DEFAULT NULL,
  `description` MEDIUMTEXT NULL DEFAULT NULL,
  `type` VARCHAR(100) NULL DEFAULT NULL,
  `metadata_json` MEDIUMTEXT NULL DEFAULT NULL,
  `availability` MEDIUMTEXT NULL DEFAULT NULL COMMENT 'Public (shared), Private (personal), or Premium (for $$$) ',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'games'
-- 
-- ---

DROP TABLE IF EXISTS `games`;
    
CREATE TABLE `games` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `owner_id` INTEGER NULL DEFAULT NULL,
  `deck_id` INTEGER NULL DEFAULT NULL,
  `timestamp` TIMESTAMP NULL DEFAULT NULL,
  `results_json` MEDIUMTEXT NULL DEFAULT NULL,
  `metadata_json` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `type` VARCHAR(50) NULL DEFAULT NULL,
  `login` VARCHAR(100) NULL DEFAULT NULL,
  `password_hash` VARCHAR(200) NULL DEFAULT NULL,
  `first_name` VARCHAR(100) NULL DEFAULT NULL,
  `last_name` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `metadata_json` MEDIUMTEXT NULL DEFAULT NULL,
  `joined_on` TIMESTAMP NULL DEFAULT NULL,
  `last_login` TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_decks'
-- 
-- ---

DROP TABLE IF EXISTS `users_decks`;
    
CREATE TABLE `users_decks` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL COMMENT 'A deck can have multiple owners, an owner can have multiple ',
  `deck_id` INTEGER NULL DEFAULT NULL,
  `owner_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'users_games'
-- 
-- ---

DROP TABLE IF EXISTS `users_games`;
    
CREATE TABLE `users_games` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `users_id` INTEGER NULL DEFAULT NULL,
  `games_id` INTEGER NULL DEFAULT NULL,
  `responses_json` MEDIUMTEXT NULL DEFAULT NULL,
  `metadata_json` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'teacher_student'
-- 
-- ---

DROP TABLE IF EXISTS `teacher_student`;
    
CREATE TABLE `teacher_student` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `teacher_users_id` INTEGER NULL DEFAULT NULL,
  `student_users_id` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `question` ADD FOREIGN KEY (deck_id) REFERENCES `decks` (`id`);
ALTER TABLE `question` ADD FOREIGN KEY (author_id) REFERENCES `users` (`id`);
ALTER TABLE `decks` ADD FOREIGN KEY (creator_id) REFERENCES `users` (`id`);
ALTER TABLE `games` ADD FOREIGN KEY (owner_id) REFERENCES `users` (`id`);
ALTER TABLE `games` ADD FOREIGN KEY (deck_id) REFERENCES `decks` (`id`);
ALTER TABLE `users_decks` ADD FOREIGN KEY (deck_id) REFERENCES `decks` (`id`);
ALTER TABLE `users_decks` ADD FOREIGN KEY (owner_id) REFERENCES `users` (`id`);
ALTER TABLE `users_games` ADD FOREIGN KEY (users_id) REFERENCES `users` (`id`);
ALTER TABLE `users_games` ADD FOREIGN KEY (games_id) REFERENCES `games` (`id`);
ALTER TABLE `teacher_student` ADD FOREIGN KEY (teacher_users_id) REFERENCES `users` (`id`);
ALTER TABLE `teacher_student` ADD FOREIGN KEY (student_users_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `question` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `decks` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `games` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_decks` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `users_games` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `teacher_student` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `question` (`id`,`deck_id`,`author_id`,`type`,`question`,`points`,`metadata_json`,`correct_answer`,`acceptable_answers_json`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `decks` (`id`,`creator_id`,`name`,`topic`,`description`,`type`,`metadata_json`,`availability`) VALUES
-- ('','','','','','','','');
-- INSERT INTO `games` (`id`,`owner_id`,`deck_id`,`timestamp`,`results_json`,`metadata_json`) VALUES
-- ('','','','','','');
-- INSERT INTO `users` (`id`,`type`,`login`,`password_hash`,`first_name`,`last_name`,`email`,`metadata_json`,`joined_on`,`last_login`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `users_decks` (`id`,`deck_id`,`owner_id`) VALUES
-- ('','','');
-- INSERT INTO `users_games` (`id`,`users_id`,`games_id`,`responses_json`,`metadata_json`) VALUES
-- ('','','','','');
-- INSERT INTO `teacher_student` (`id`,`teacher_users_id`,`student_users_id`) VALUES
-- ('','','');