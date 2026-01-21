-- Active: 1747705708757@@127.0.0.1@5432@mydb4

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age SMALLINT,
    grade CHAR(2),
    course VARCHAR(50),
    email VARCHAR(50),
    dob DATE,
    blood_group VARCHAR(50),
    country VARCHAR(50)
);

DROP TABLE students;
INSERT INTO students (first_name, last_name, age, grade, course, email, dob, blood_group, country) 
VALUES 
('Amelia', 'Stone', 21, 'A+', 'Data Science', 'amelia.stone@example.com', '2003-04-12', 'O+', 'USA'),
('Ravi', 'Patel', 22, 'B', 'Mechanical Engineering', 'ravi.patel@example.com', '2002-10-19', 'A-', 'India'),
('Lena', 'Kowalski', 20, 'A', NULL, 'lena.kowalski@example.com', '2004-01-07', 'B+', 'Poland'),
('Diego', 'Marquez', 19, 'B+', 'Political Science', 'diego.marquez@example.com', '2005-06-22', 'AB+', 'Mexico'),
('Yuki', 'Tanaka', 23, 'A-', 'Robotics', 'yuki.tanaka@example.com', '2001-11-30', 'O-', 'Japan'),
('Fatima', 'Zahir', 20, 'A', 'International Relations', 'fatima.zahir@example.com', '2004-03-15', 'B-', 'UAE'),
('Noah', 'Andrews', 21, 'C+', NULL, 'noah.andrews@example.com', '2003-09-05', 'A+', 'USA'),
('Chloe', 'Nguyen', 22, 'B-', 'Fine Arts', 'chloe.nguyen@example.com', '2002-12-25', 'AB-', 'Vietnam'),
('Jasper', 'Berg', 20, 'B', NULL, 'jasper.berg@example.com', '2004-05-17', 'O+', 'Netherlands'),
('Sofia', 'Moretti', 19, 'A+', 'Marine Biology', 'sofia.moretti@example.com', '2005-08-09', 'A-', 'Italy'),
('Amelia', 'Stone', 21, 'A+', 'Data Science', 'amelia.stone@example.com', '2003-04-12', 'O+', 'USA'),
('Ravi', 'Patel', 22, 'B', 'Mechanical Engineering', 'ravi.patel@example.com', '2002-10-19', 'A-', 'India'),
('Lena', 'Kowalski', 20, 'A', NULL, 'lena.kowalski@example.com', '2004-01-07', 'B+', 'Poland'),
('Diego', 'Marquez', 19, 'B+', 'Political Science', 'diego.marquez@example.com', '2005-06-22', 'AB+', 'Mexico'),
('Yuki', 'Tanaka', 23, 'A-', 'Robotics', 'yuki.tanaka@example.com', '2001-11-30', 'O-', 'Japan'),
('Fatima', 'Zahir', 20, 'A', 'International Relations', 'fatima.zahir@example.com', '2004-03-15', 'B-', 'UAE'),
('Noah', 'Andrews', 21, 'C+', NULL, 'noah.andrews@example.com', '2003-09-05', 'A+', 'USA'),
('Chloe', 'Nguyen', 22, 'B-', 'Fine Arts', 'chloe.nguyen@example.com', '2002-12-25', 'AB-', 'Vietnam'),
('Jasper', 'Berg', 20, 'B', NULL, 'jasper.berg@example.com', '2004-05-17', 'O+', 'Netherlands'),
('Sofia', 'Moretti', 19, 'A+', 'Marine Biology', 'sofia.moretti@example.com', '2005-08-09', 'A-', 'Italy');

SELECT * from students
 WHERE grade='A+'

SELECT * from students

-- show with other name by alias "as". 
SELECT email as student_email FROM students;

--accending("ASC") / descending("DESC") t any column by "ORDER"
SELECT * FROM students ORDER BY course ASC;

--query by single thing
SELECT * FROM students WHERE country = 'Ireland'

--query by double or multiple thing
SELECT * from students
 WHERE (grade='A+' or grade = 'B') and country = 'France';

SELECT * from students
 WHERE (grade='A+' or grade = 'A') and age >= 18;


SELECT * from students
 WHERE  age != 20;

SELECT * from students
 WHERE  country = 'USA';


 TRUNCATE TABLE students RESTART IDENTITY;


--scalar functions   => [upper(), lower(), concate(), length()]

--make first name capital
 SELECT UPPER(first_name) as first_name_capital, *  from students;


-- concate first and last name

SELECT concat(first_name ,' ', last_name) as student_full_name , *  from students;

--aggregate functions =>[ max(),min(),sum(),avg(),count() ]

SELECT max(age) FROM students;

SELECT max(length(concat(first_name ,' ', last_name))) FROM students;

SELECT * FROM students 
WHERE NOT country = 'USA'

-- handle null . it's not work with any operator. for example if i have null values in table it will not return anything if i use normal oprational function

SELECT * FROM students
WHERE course IS NULL;

-- we can also handle NULL with COALESCE
SELECT  COALESCE(course, 'course not added' )  FROM students;
SELECT  COALESCE(course, 'course not added' )as "Email", first_name , country, age, email  FROM students;


SELECT * from students
WHERE country IN('USA','Poland', 'Mexico');

-- pagination
SELECT * FROM students LIMIT 5 OFFSET 5*0;
SELECT * FROM students LIMIT 10 OFFSET 10*1;


SELECT * from students WHERE country like '%land%'