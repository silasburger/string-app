const PORT = 8000;
const DB_URI = process.env.NODE_ENV === 'test' ? 'strings-db-test ': 'strings-db';

module.exports = {
  PORT,
  DB_URI
}