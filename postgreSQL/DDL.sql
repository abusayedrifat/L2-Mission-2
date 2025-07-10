-- Active: 1747705708757@@127.0.0.1@5432@mydb4
SELECT * from person2;

ALTER TABLE person2 
 ADD COLUMN email VARCHAR(50) DEFAULT 'default@gmail.com' NOT NULL ;

 INSERT INTO person2 VALUES(5 ,'ryans',32, 'ryans@gmail.com');

ALTER TABLE person2
ADD COLUMN fatherName VARCHAR(50) NOT NULL DEFAULT 'father name';

ALTER TABLE person2
DROP COLUMN fathername;

ALTER TABLE person2
RENAME COLUMN email to user_email;


--change the type of existing column
ALTER TABLE person2
 alter COLUMN age type SMALLINT

 --add contraint in a column
 ALTER TABLE person2
 alter COLUMN age set NOT NULL;

 ALTER TABLE person2
 alter COLUMN age DROP NOT NULL