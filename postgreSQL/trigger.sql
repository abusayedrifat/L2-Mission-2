-- Active: 1747705708757@@127.0.0.1@5432@mydb3
/*

a trigger is a database object in postgresql ( and other database management system) that automatically executes a specified set of actions in response to certain events or conditions;

*/

-- table-level events
    -- INSERT, UPDATE, DELETE, TRUNCATE

-- DATABASE LEVEL EVENTS
    -- database-startup, Database-shutdown, Connection start and end etc

-- craete trigger trigger_name
--{Before | after|instead of} {insert|update|delete|truncate}
--ON table_name
--[FOR EACH ROW]
--EXECUTE FUNCTION function_name();


CREATE  table my_users(
    user_name VARCHAR(50),
    email VARCHAR(100)
);

INSERT INTO my_users VALUES 
('rifat', 'abusayedrifat0131@gmail.com'),
('emon', 'emon@gmail.com'),
('ershad','ershad@gmail.com');


SELECT * FROM my_users;

CREATE Table dlt_list(
    dlted_user_name VARCHAR(50),
    dlted_time TIMESTAMP
);

SELECT * from dlt_list;

CREATE or REPLACE Function save_dlt_user()
RETURNS TRIGGER
LANGUAGE plpgsql
AS
$$
BEGIN
 INSERT INTO dlt_list VALUES(OLD.user_name,now());
 RAISE NOTICE 'deleted user audit log created';
 RETURN OLD;
END
$$;


CREATE Trigger save_dlt_user_trigger
BEFORE DELETE
ON my_users
FOR EACH ROW
EXECUTE FUNCTION save_dlt_user();

DELETE FROM my_users WHERE user_name = 'emon';