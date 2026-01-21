-- Active: 1747705708757@@127.0.0.1@5432@mydb4

-- show timezone


SELECT now();

CREATE TABLE timez (ts TIMESTAMP WITHOUT TIME ZONE , tsz TIMESTAMP WITH TIME ZONE); 

INSERT INTO timez VALUES('2025-06-12', '2025-05-8');

SELECT * FROM timez;


SELECT now()::TIME;

SELECT now()::DATE;

SELECT to_char(now(), 'dd/mm/yyyy');
SELECT to_char(now(), 'dd mon yyyy');

SELECT CURRENT_DATE - INTERVAL '35 year';
SELECT CURRENT_DATE - INTERVAL '35 year 6 month';
SELECT CURRENT_DATE - INTERVAL '35 year 6 month 3 days';


SELECT age(CURRENT_DATE , '2002-05-25');


SELECT * , age(CURRENT_DATE , dob) from students;

SELECT extract( YEAR FROM CURRENT_DATE)





