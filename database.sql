CREATE TABLE good(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    img_src VARCHAR(255),
    price VARCHAR(255),
    more_image text[]
)

-- CREATE TABLE messages(
--     id SERIAL PRIMARY KEY,
--     message {
--         selector1 VARCHAR(255),
--         selector2 VARCHAR(255),
--         count_id INTEGER
--     },
--     time VARCHAR(255),
--     date VARCHAR(255)

--     FOREIGN KEY (user_id) REFERENCES person(id)
-- );