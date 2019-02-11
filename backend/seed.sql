DROP DATABASE IF EXISTS "strings-db";

CREATE DATABASE "strings-db";

\c "strings-db"

CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT);

INSERT INTO strings (string) VALUES
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾'),
    ('👌 👈 👉 👆 👇 ☝️ ✋'),
    ('Strings and strands');