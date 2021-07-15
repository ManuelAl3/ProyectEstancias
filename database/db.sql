SHOW DATABASES;

CREATE DATABASE database_estanciasApp;

USE database_estanciasApp;

-- users TABLE
CREATE TABLE users(
    user_id INT(250) NOT NULL,
    username VARCHAR(100) NOT NULL,
    first_last_name VARCHAR(100) NOT NULL,
    second_last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    enrollment VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    rol VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (user_id);

ALTER TABLE users
    MODIFY user_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

-- encuestas TABLES
CREATE TABLE quizzes(
    quiz_id INT(250) NOT NULL,
    type VARCHAR(250) NOT NULL,
    title VARCHAR(3000) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    created_by VARCHAR(250) NOT NULL,
    updated_at VARCHAR(250) NOT NULL,
    status BIT NOT NULL,
    user_id INT(250),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(user_id)
);

ALTER TABLE quizzes
    ADD PRIMARY KEY (quiz_id);

ALTER TABLE quizzes
    MODIFY quiz_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE quizzes;