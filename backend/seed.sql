DROP DATABASE IF EXISTS "strings-db";

CREATE DATABASE "strings-db";

\c "strings-db"

CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT, created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

INSERT INTO strings (string, created_at) VALUES
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾',  '1992-06-22 19:10:25-07'),
    ('👌 👈 👉 👆 👇 ☝️ ✋', '1994-01-22 18:10:25-07'),
    ('Strings and strands', '2017-01-22 19:10:25-07'),
    ('Strings and strands', '1841-01-22 19:10:25-07'),
    ('👩‍🍳 👨‍🍳 👩‍🎓', '1841-01-22 19:10:25-07'),
    ('EMOJI MOVIE', '2019-01-22 19:10:25-07'),
    ('👩‍🍳 👨‍🍳 👩‍🎓', '2019-02-16 19:10:25-07'),
    ('COLLECT AT GO', '2019-02-14 19:10:25-07'),
    (' 😹 😻 ', '2019-01-14 19:10:25-07'),
    (' 👆 👇 ☝️', '1969-01-14 19:10:25-07'),
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾👌 👈 👉 👆 👇 ☝️ ✋👩‍🍳 👨‍🍳 👩‍🎓', '1239-01-14 19:10:25-07');
    