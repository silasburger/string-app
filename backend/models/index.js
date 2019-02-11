const db = require("../db");

class Post {

  static async getAll() {
    const posts = await db.query(
      `
        SELECT name, string, created_at 
        FROM posts
        ORDER BY created_at DESC;
      `
    );
    return posts.rows;
  }

  static async create({name, string}) {
    const posted = await db.query(
      `
        INSERT INTO posts
          (name, string)
        VALUES ($1, $2)
        RETURNING name, string, created_at;
      `
      , [name, string]
    );
    return posted.rows[0];
  }
}

module.exports = Post;


