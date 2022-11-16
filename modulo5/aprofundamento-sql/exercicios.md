### EXERCÍCIO 1

a) Remove a coluna salario.

b) Transforma a coluna gender em sex como VARCHAR(6)

c) Muda a capacidade de caracteres da coluna gender para VARHCAR(255)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

### EXERCÍCIO 2

UPDATE Actor
SET name = "Katiuscia Canoro", birth_date = "1978-12-04"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

UPDATE Actor
SET name = "Cláudia Raia", birth_date = "1966-12-23", salary = 899000, gender = "female"
WHERE id = "005";

### EXERCÍCIO 3

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### EXERCÍCIO 4

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

### EXERCÍCIO 5

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

SELECT id, name 
FROM Actor
ORDER BY name DESC;

SELECT *
FROM Actor
ORDER BY salary;

SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;

SELECT AVG(salary), gender
FROM Actor
group by gender;

### EXERCÍCIO 6

ALTER TABLE Movie ADD playing_limit_date DATE;

ALTER TABLE Movie CHANGE rating rating FLOAT;

UPDATE Movie
SET playing_limit_date = "2023-01-26"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2019-04-25"
WHERE id = "002";

DELETE FROM Movie WHERE id = "001";

SELECT * 
FROM Movie
WHERE id = "001"