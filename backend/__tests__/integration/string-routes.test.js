const request = require('supertest');
const app = require('../../app');
const client = require('../../db');

process.env.NODE_ENV = 'test';

beforeEach(async () => {
  await client.query(`
  INSERT INTO strings (string) VALUES
  ('😺 😸 😹 😻 😼 😽 🙀 😿 😾'),
  ('👌 👈 👉 👆 👇 ☝️ ✋'),
  ('Strings and strands')
  `);
});

afterEach(async () => {
  await client.query(`DELETE FROM string`);
});

afterAll(async () => {
  await client.end();
});

describe('GET /', () => {
  it('should return all the strings', async () => {
    let response = await request(app).get('/strings');
    expect(response.body.posts.length).toEqual(3);
    expect(response.body.posts.includes).toEqual('😺 😸 😹 😻 😼 😽 🙀 😿 😾');
    expect(response.status).toEqual(200);
    expect(Object.keys(response.body.posts[0]).length).toEqual(2);
  }, 3000);
});

describe('post /', () => {
  it('Sends JSON to create new company and receive JSON with company info', async () => {
    let response = await request(app)
      .post('/strings')
      .send({
        string: 'Ok cool!'
      });
    console.log(response.body);
    expect(response.body.posted).toEqual('Ok cool');
    let data = await client.query('select * from strings');
    expect(data.rows.length).toEqual(4);
  });
});
