const db = require("../db");

class Post {

  static async getAll() {
    const posts = await db.query(
      `
        SELECT id, string 
        FROM strings
      `
    );
    return posts.rows;
  }

  static async create({string}) {
    const posted = await db.query(
      `
        INSERT INTO strings
          (string)
        VALUES ($1)
        RETURNING id, string;
      `
      , [string]
    );
    return posted.rows[0];
  }
}

module.exports = Post;


