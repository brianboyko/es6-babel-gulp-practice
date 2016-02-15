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
  id SERIAL PRIMARY KEY NOT NULL,
  deck_id INTEGER NULL,
  author_id INTEGER NULL,
  type CHAR(255) NULL,
  question TEXT NULL,
  points INT NULL,
  metadata_json TEXT NULL,
  correct_answer TEXT NULL,
  acceptable_answers_json TEXT NULL
);

-- ---
-- Table 'decks'
-- 
-- ---

DROP TABLE IF EXISTS decks;
    
CREATE TABLE decks (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NULL,
  creator_id INTEGER NULL,
  name CHAR(255) NULL,
  topic CHAR(255) NULL,
  description TEXT NULL,
  type CHAR(255) NULL,
  metadata_json TEXT NULL
);

-- ---
-- Table 'games'
-- 
-- ---

DROP TABLE IF EXISTS games;
    
CREATE TABLE games (
  id SERIAL PRIMARY KEY NOT NULL,
  owner_id INTEGER NULL,
  deck_id INTEGER NULL,
  game_time TIMESTAMP NULL,
  results_json TEXT NULL,
  metadata_json TEXT NULL
);

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS users;
    
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  type CHAR(255) NULL,
  login CHAR(255) NULL,
  password_hash CHAR(255) NULL,
  first_name CHAR(255) NULL,
  last_name CHAR(255) NULL,
  email VCHAR(255) NULL,
  metadata_json TEXT NULL,
  joined_on TIMESTAMP NULL,
  last_login TIMESTAMP NULL
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
