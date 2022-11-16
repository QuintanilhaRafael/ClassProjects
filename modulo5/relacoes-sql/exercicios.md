### EXERCÍCIO 1

a) Chave que conecta as duas tabelas através de uma referência.

c) Não reconhece a conexão com o id da FK.

e) Não permite que você apague, dizendo que o mesmo está ligado a outra tabela pela FK.

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES( "001", "Muito bom !", 7.7, "001");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES( "002", "Muito bom !", 7.9, "002");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES( "003", "Muito bom !", 9.2, "003");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES( "004", "Muito bom !", 8.1, "004");

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES( "005", "Muito bom !", 8.1, "005");

ALTER TABLE Movie DROP column rating;

DELETE FROM Movie WHERE id = "001";


### EXERCÍCIO 2

a) De certa forma, conecta as duas tabelas anteriores (actors e movies), linkando os atores aos filmes que participaram.

c) Não reconhece a informação correspondente a FK informada.

d) Não permite pois o mesmo está ligado a outra tabela através da FK.

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("001", "001");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("001", "002");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("004", "006");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("004", "007");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("002", "003");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("003", "004");

INSERT INTO MovieCast (movie_id, actor_id)
VALUES("007", "004");

### EXERCÍCIO 3

a) Retorna somente os resultados que tem correspondencia com a FK. 

SELECT m.title as movie_title, m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id
ORDER BY m.id;