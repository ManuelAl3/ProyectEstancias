SHOW DATABASES;

CREATE DATABASE database_estanciasApp;

USE database_estanciasApp;

-- TABLA usuarios
CREATE TABLE users(
    user_id INT(250) NOT NULL,
    username VARCHAR(100) NOT NULL,
    first_last_name VARCHAR(100) NOT NULL,
    second_last_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    rol VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (user_id);

ALTER TABLE users
    MODIFY user_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE users;

-- TABLA status encuestas

CREATE TABLE statusQuizzes(
    statusQuiz_id INT(250) NOT NULL,
    quiz_id INT(250) NOT NULL,
    updated_at VARCHAR(250) NOT NULL,
    status BIT NOT NULL,
    user_id INT(250),
    CONSTRAINT fk_statusQuizzes_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

ALTER TABLE statusQuizzes
    ADD PRIMARY KEY (quiz_id);

ALTER TABLE statusQuizzes
    MODIFY quiz_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE statusQuizzes;

-- TABLA encuastas
CREATE TABLE quizzes(
    quiz_id INT(250) NOT NULL,
    type VARCHAR(250) NOT NULL,
    title VARCHAR(3000) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    created_by VARCHAR(250) NOT NULL,
    statusQuiz_id INT(250) NOT NULL,
    CONSTRAINT fk_quizzes_statusQuizzes FOREIGN KEY (statusQuiz_id) REFERENCES statusQuizzes(statusQuiz_id)
);

ALTER TABLE quizzes
    ADD PRIMARY KEY (quiz_id);

ALTER TABLE quizzes
    MODIFY quiz_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE quizzes;

-- TABLA secciones
CREATE TABLE sections(
    section_id INT(250) NOT NULL,
    question_id INT(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    quiz_id INT(250) NOT NULL,
    CONSTRAINT fk_sections_quizzes FOREIGN KEY (quiz_id) REFERENCES quizzes(quiz_id)
    CONSTRAINT fk_sections_questions FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

ALTER TABLE sections
    ADD PRIMARY KEY (section_id);

ALTER TABLE sections
    MODIFY section_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE sections;

--TABLA subsecciones
CREATE TABLE subsections(
    subsection_id INT(250) NOT NULL,
    question_id INT(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    description VARCHAR(3000) NOT NULL,
    section_id INT(250) NOT NULL,
    CONSTRAINT fk_subsection_sections FOREIGN KEY (section_id) REFERENCES sections(section_id)
    CONSTRAINT fk_subsection_questions FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

ALTER TABLE subsections
    ADD PRIMARY KEY (subsection_id);

ALTER TABLE subsections
    MODIFY subsection_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE subsections;

-- TABLA preguntas
CREATE TABLE questions(
    question_id INT(250) NOT NULL,
    question VARCHAR(3000) NOT NULL,
    type VARCHAR(250) NOT NULL,
    section_id INT(250) NOT NULL,
    subsection_id INT(250) NOT NULL,
    
    CONSTRAINT fk_questions_section FOREIGN KEY (section_id) REFERENCES sections(section_id)
    CONSTRAINT fk_questions_subsection FOREIGN KEY (subsection_id) REFERENCES subsections(subsection_id)
);

ALTER TABLE questions
    ADD PRIMARY KEY (answer_id);

ALTER TABLE questions
    MODIFY answer_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE questions;

--TABLA opcionesPregunta

CREATE TABLE optionsQuestion(
    option_id INT(250) NOT NULL,
    question_id INT(250) NOT NULL,
    optionQ VARCHAR(250) NOT NULL,
    
    CONSTRAINT fk_optionsQuestion_question FOREIGN KEY (question_id) REFERENCES questions(question_id)
);

ALTER TABLE optionsQuestion
    ADD PRIMARY KEY (answer_id);

ALTER TABLE optionsQuestion
    MODIFY answer_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE optionsQuestion;

-- TABLA respuestas
CREATE TABLE answers(
    answer_id INT(250) NOT NULL,
    answer VARCHAR(3000) NOT NULL,
    user_id INT(250) NOT NULL,
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    option_id INT(250) NOT NULL,
    question_id INT(250) NOT NULL,
    CONSTRAINT fk_answers_users FOREIGN KEY (user_id) REFERENCES users(user_id)
    CONSTRAINT fk_answers_questions FOREIGN KEY (question_id) REFERENCES questions(question_id)
    CONSTRAINT fk_answers_optionsQ FOREIGN KEY (option_id) REFERENCES optionsQuestion(option_id)
);

ALTER TABLE answers
    ADD PRIMARY KEY (answer_id);

ALTER TABLE answers
    MODIFY answer_id INT(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;

DESCRIBE answers;

INSERT INTO quizzes(quiz_id,type,title,description,created_by,updated_at,status,user_id,created_at)
    VALUES("","ingreso","Encusta de Ingreso","Encuesta de ingreso al programa de estudios de ingenieria en software","","","0","","")