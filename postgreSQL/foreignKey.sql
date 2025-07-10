-- Active: 1747705708757@@127.0.0.1@5432@mydb4


--data insertion 
CREATE Table "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(25) NOT NULL
);

CREATE Table post (
    id SERIAL PRIMARY KEY,
    title text NOT NULL,
    user_id INTEGER REFERENCES "user"(id) on delete set DEFAULT DEFAULT 2
);

ALTER TABLE post 
alter COLUMN user_id set NOT NULL ;

INSERT INTO "user"(username) VALUES 
    ('akash'), ('btash'),('nodi'), ('sagor');


    INSERT INTO post (title, user_id) VALUES 
    ('tmi akash',2), ('tmi amr batash',1), ('tmi amr nodi',3) , ('tmi amr sagor',3);

SELECT * FROM "user";
SELECT * from post;

INSERT INTO post (title, user_id) VALUES
('tmra ki koro?',2); 



--data deletion when in a relatonship

--cascading deletion -> ON DELETE CASCADE .[delete the post when user is deleted ]
--stting null -> ON DELETE SET NULL . [will delete the user_id and instead set NUll in "post" named table when user is deleted]
-- restrict deletion ->ON DELETE RESTRICT / ON DELETED NO ACTION 
-- 
DROP Table post;
DROP Table "user";

DELETE FROM post
WHERE id = 6;