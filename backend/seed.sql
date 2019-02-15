DROP DATABASE IF EXISTS "strings-db";

CREATE DATABASE "strings-db";

\c "strings-db"

CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT, created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO strings (string, created_at) VALUES
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾',  '2016-06-22 19:10:25-07'),
    ('👌 👈 👉 👆 👇 ☝️ ✋', '2019-01-22 18:10:25-07'),
    ('Strings and strands', '2019-01-22 19:10:25-07');
    
INSERT INTO strings (string) VALUES
    ('👩‍🍳 👨‍🍳 👩‍🎓');