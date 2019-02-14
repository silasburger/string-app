DROP DATABASE IF EXISTS "strings-db-test";

CREATE DATABASE "strings-db-test";

\c "strings-db-test"

CREATE TABLE strings (id SERIAL PRIMARY KEY, string TEXT);