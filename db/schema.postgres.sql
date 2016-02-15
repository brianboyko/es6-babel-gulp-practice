-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'question'
-- 
-- ---

DROP TABLE IF EXISTS question;
    
CREATE TABLE question (
  id INTEGER NULL SERIAL DEFAULT NULL,
  deck_id INTEGER NULL DEFAULT NULL,
  author_id INTEGER NULL DEFAULT NULL,
  type VARCHAR(255) NULL DEFAULT NULL,
  question TEXT NULL DEFAULT NULL,
  points INT NULL DEFAULT NULL,
  metadata_json TEXT NULL DEFAULT NULL,
  correct_answer TEXT NULL DEFAULT NULL,
  acceptable_answers_json TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'decks'
-- 
-- ---

DROP TABLE IF EXISTS decks;
    
CREATE TABLE decks (
  id INTEGER NULL SERIAL DEFAULT NULL,
  owner_id INTEGER NULL DEFAULT NULL,
  creator_id INTEGER NULL DEFAULT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  topic VARCHAR(255) NULL DEFAULT NULL,
  description TEXT NULL DEFAULT NULL,
  type VARCHAR(255) NULL DEFAULT NULL,
  metadata_json TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'games'
-- 
-- ---

DROP TABLE IF EXISTS games;
    
CREATE TABLE games (
  id INTEGER NULL SERIAL DEFAULT NULL,
  owner_id INTEGER NULL DEFAULT NULL,
  deck_id INTEGER NULL DEFAULT NULL,
  timestamp TIMESTAMP NULL DEFAULT NULL,
  results_json TEXT NULL DEFAULT NULL,
  metadata_json TEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id INTEGER NULL SERIAL DEFAULT NULL,
  type VARCHAR(255) NULL DEFAULT NULL,
  login VARCHAR(255) NULL DEFAULT NULL,
  password_hash VARCHAR(255) NULL DEFAULT NULL,
  first_name VARCHAR(255) NULL DEFAULT NULL,
  last_name VARCHAR(255) NULL DEFAULT NULL,
  email VARCHAR(255) NULL DEFAULT NULL,
  metadata_json TEXT NULL DEFAULT NULL,
  joined_on TIMESTAMP NULL DEFAULT NULL,
  last_login TIMESTAMP NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE question ADD FOREIGN KEY (deck_id) REFERENCES decks (id);
ALTER TABLE question ADD FOREIGN KEY (author_id) REFERENCES users (id);
ALTER TABLE decks ADD FOREIGN KEY (owner_id) REFERENCES users (id);
ALTER TABLE decks ADD FOREIGN KEY (creator_id) REFERENCES users (id);
ALTER TABLE games ADD FOREIGN KEY (owner_id) REFERENCES users (id);
ALTER TABLE games ADD FOREIGN KEY (deck_id) REFERENCES decks (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE question ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE decks ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE games ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE users ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO question (id,deck_id,author_id,type,question,points,metadata_json,correct_answer,acceptable_answers_json) VALUES
-- ('','','','','','','','','');
-- INSERT INTO decks (id,owner_id,creator_id,name,topic,description,type,metadata_json) VALUES
-- ('','','','','','','','');
-- INSERT INTO games (id,owner_id,deck_id,timestamp,results_json,metadata_json) VALUES
-- ('','','','','','');
-- INSERT INTO users (id,type,login,password_hash,first_name,last_name,email,metadata_json,joined_on,last_login) VALUES
-- ('','','','','','','','','','');