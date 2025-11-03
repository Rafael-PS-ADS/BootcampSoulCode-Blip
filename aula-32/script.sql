
CREATE DATABASE IF NOT EXISTS aulas_blip;

-- DROP DATABASE aulas_blip;

SHOW DATABASES;

USE aulas_blip;

CREATE TABLE IF NOT EXISTS alunos (
	id INT AUTO_INCREMENT PRIMARY KEY,
	matricula INT NOT NULL,
    nome VARCHAR(150) NOT NULL,
    data_nascimento DATE,
    peso FLOAT DEFAULT 0
) ENGINE = InnoDB;

DESCRIBE alunos;

SHOW TABLES;

DROP TABLE alunos;

INSERT INTO alunos VALUES (1, 123, "João", "1999-01-01", 80);

INSERT INTO alunos
	(matricula, nome, data_nascimento)
VALUES
	(125, "Maria", "1995-03-01"),
    (126, "Caio", "1998-04-01"),
    (127, "Jonas", "1997-06-01"),
    (128, "Davi", "2000-02-01");
    
INSERT INTO alunos (matricula, nome) VALUES (128, "Clara");

SELECT id, matricula, nome, data_nascimento, peso FROM alunos;

SELECT * FROM alunos ORDER BY data_nascimento DESC;

SELECT * FROM alunos ORDER BY nome LIMIT 5;

SELECT * FROM alunos ORDER BY data_nascimento DESC LIMIT 1;

SELECT * FROM alunos;

UPDATE alunos SET peso = 83, data_nascimento = "1996-04-01" WHERE id = 4;

DELETE FROM alunos WHERE id = 5;

SELECT
	nome AS nome_aluno,
    matricula AS matricula_aluno,
    peso * 2.2 AS peso_libras
FROM alunos;

-- Crie uma tabela chamada cursos com os seguintes campos:
-- id (inteiro, chave primária e auto incremento)
-- nome (texto, obrigatório)
-- carga_horaria (inteiro, obrigatório)
-- modalidade (texto, podendo armazenar “Presencial” ou “Online”)

DROP TABLE cursos;

CREATE TABLE IF NOT EXISTS cursos (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL,
    carga_horaria INT NOT NULL,
    modalidade ENUM("Presencial", "Online") DEFAULT "Presencial"
) ENGINE = InnoDB;

DESCRIBE cursos;

-- Insira pelo menos 10 registros na tabela cursos, com dados variados.

INSERT INTO cursos (nome, carga_horaria, modalidade) VALUES
("Curso de Programação com Node.js", 200, "Online"),
("Curso de Arquitetura de Computadores", 300, "Presencial"),
("Curso de Banco de Dados com MySQL", 180, "Online"),
("Curso de Desenvolvimento Web com React", 220, "Online"),
("Curso de Lógica de Programação", 150, "Presencial"),
("Curso de Python para Iniciantes", 200, "Online"),
("Curso de Redes de Computadores", 240, "Presencial"),
("Curso de Segurança da Informação", 260, "Online"),
("Curso de Análise de Sistemas", 320, "Presencial"),
("Curso de Inteligência Artificial com Python", 280, "Online");

-- Exiba todos os cursos cadastrados.

SELECT * FROM cursos;

-- Exiba apenas os cursos por ordem de nome.

SELECT * FROM cursos ORDER BY nome;

-- Liste todos os cursos em ordem decrescente de carga horária.

SELECT * FROM cursos ORDER BY carga_horaria DESC;

-- Liste o nome e a carga horária dos cursos, exibindo os cabeçalhos das colunas como:
-- Curso e Duração (h)

SELECT nome AS curso, carga_horaria AS duracao FROM cursos;

-- Atualize a carga horária de um curso específico (escolhido por você) para um novo valor.

UPDATE cursos SET carga_horaria = 220 WHERE id = 3;

-- Exiba o curso com maior carga horária.

SELECT * FROM cursos ORDER BY carga_horaria DESC LIMIT 1;

-- Exclua um curso com base no id.

DELETE FROM cursos WHERE id = 7;




SELECT
	modalidade,
	COUNT(*) AS quantidade_cursos
FROM cursos
GROUP BY modalidade;

SELECT
	modalidade,
	MAX(carga_horaria) AS maior_carga_horaria
FROM cursos
GROUP BY modalidade;

SELECT
	modalidade,
	MIN(carga_horaria) AS menor_carga_horaria
FROM cursos
GROUP BY modalidade;

SELECT
	modalidade,
	SUM(carga_horaria) AS total_carga_horaria
FROM cursos
GROUP BY modalidade;

SELECT
	modalidade,
	AVG(carga_horaria) AS media_carga_horaria
FROM cursos
GROUP BY modalidade;

SELECT * FROM alunos WHERE nome = "Davi";

SELECT * FROM alunos WHERE peso < 70 AND matricula > 124;

SELECT * FROM cursos WHERE NOT (carga_horaria >= 250 OR modalidade = "Online");

SELECT * FROM alunos WHERE matricula IN (124, 125, 126);

SELECT * FROM alunos WHERE id NOT IN (1, 2, 3);

SELECT * FROM cursos WHERE carga_horaria BETWEEN 250 AND 300;

SELECT * FROM alunos WHERE peso NOT BETWEEN 60 AND 70;

SELECT * FROM alunos
WHERE YEAR(data_nascimento) = '1995'
AND MONTH(data_nascimento) BETWEEN 1 AND 3;

SELECT * FROM alunos WHERE nome LIKE "Ma%";

SELECT * FROM alunos WHERE nome LIKE "%a";

SELECT * FROM alunos WHERE nome LIKE "%r%";

SELECT * FROM alunos WHERE peso IS NOT NULL;

SELECT NOW() AS agora;

SELECT *, YEAR(data_nascimento) ano_nascimento FROM alunos;

SELECT YEAR(NOW()) - YEAR(data_nascimento) AS idade FROM alunos;

SELECT LOWER(nome), UPPER(nome) FROM alunos;

SELECT CONCAT(nome, " ", modalidade) FROM cursos;

SELECT CHAR_LENGTH(nome) FROM cursos;

SELECT * FROM cursos WHERE CHAR_LENGTH(nome) > 35;

SELECT ABS(200 - 300);

SELECT ROUND(AVG(carga_horaria)) FROM cursos;

SELECT * FROM alunos WHERE id = ROUND(RAND() * 7);

SELECT * FROM cursos WHERE carga_horaria > (
	SELECT AVG(carga_horaria) FROM cursos
);



CREATE TABLE IF NOT EXISTS inscricoes (
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_aluno INT NOT NULL,
    id_curso INT NOT NULL,
    FOREIGN KEY (id_aluno) REFERENCES alunos (id),
    FOREIGN KEY (id_curso) REFERENCES cursos (id)
) ENGINE = InnoDB;

DESCRIBE inscricoes;

SELECT * FROM alunos;

SELECT * FROM cursos;

INSERT INTO inscricoes (id_aluno, id_curso)
VALUES (1, 4), (2, 1), (3, 1), (3, 6), (4, 7);

SELECT * FROM inscricoes;

SELECT * FROM alunos WHERE id IN (
	SELECT id_aluno FROM inscricoes WHERE id_curso = 1
);

SELECT a.*, c.* FROM alunos a
JOIN inscricoes i ON a.id = i.id_aluno
JOIN cursos c ON c.id = i.id_curso;

SELECT * FROM cursos c
LEFT JOIN inscricoes i ON c.id = i.id_curso;

SELECT a.* FROM alunos a
JOIN inscricoes i ON a.id = i.id_aluno
JOIN cursos c ON c.id = i.id_curso
WHERE c.nome LIKE "%programação%";

