-- Active: 1747705708757@@127.0.0.1@5432@mydb3

--view in postgres just works just like function which can be used by an variable

CREATE View employees_avg_salary
AS
SELECT department_name, round(avg(salary)) FROM employees GROUP BY department_name;


SELECT * FROM employees;

SELECT * from employees_avg_salary;