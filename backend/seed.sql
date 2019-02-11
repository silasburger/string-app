DROP DATABASE IF EXISTS "strings-db";

CREATE DATABASE "strings-db";

\c "strings-db"

CREATE TABLE strings (string TEXT PRIMARY KEY);

INSERT INTO strings (string) VALUES
    ('😺 😸 😹 😻 😼 😽 🙀 😿 😾'),
    ('👌 👈 👉 👆 👇 ☝️ ✋'),
    ('Strings and strands');