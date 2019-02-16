DROP DATABASE IF EXISTS "strings-db";

CREATE DATABASE "strings-db";

\c "strings-db"

CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT, created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO strings (string, created_at) VALUES
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾',  '1992-06-22 19:10:25-07'),
    ('👌 👈 👉 👆 👇 ☝️ ✋', '1994-01-22 18:10:25-07'),
    ('Strings and strands', '2017-01-22 19:10:25-07'),
    ('Strings and strands', '1841-01-22 19:10:25-07');
    
INSERT INTO strings (string) VALUES
    ('👩‍🍳 👨‍🍳 👩‍🎓'),
    ('EMOJI MOVIE'),
    ('👩‍🍳 👨‍🍳 👩‍🎓'),
    ('COLLECT AT GO'),
    (' 😹 😻 '),
    (' 👆 👇 ☝️'),
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾👌 👈 👉 👆 👇 ☝️ ✋👩‍🍳 👨‍🍳 👩‍🎓');