-- Active: 1747705708757@@127.0.0.1@5432@mydb4
SELECT * FROM students;


SELECT grade , count(*) FROM students
GROUP BY grade;

SELECT country , avg(age) FROM students
GROUP BY country
HAVING avg(age) > 20;

SELECT extract(YEAR FROM dob) as birth_year, count(*) FROM students
 GROUP BY birth_year ORDER BY birth_year ASC;


