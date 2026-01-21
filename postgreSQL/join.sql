-- Active: 1747705708757@@127.0.0.1@5432@mydb4


SELECT * FROM "user";
SELECT * from post;

--inner join
 SELECT title, username 
 FROM post 
 INNER JOIN "user" 
 ON post.user_id = "user".id ;
 i