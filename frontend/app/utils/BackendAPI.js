import request from 'utils/request';
const BASE_URL = 'http://localhost:8000';

export default class BackendAPI {
  static createPost(string) {
    return request(`${BASE_URL}/strings`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ string }),
    });
  }

  static getAllPosts() {
    const res = request(`${BASE_URL}/strings`);
    return res;
  }
}
