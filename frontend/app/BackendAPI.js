import axios from 'axios';
const BASE_URL = 'http://localhost:8000';

export default class BackendAPI {
  static async getAllPosts() {
    return axios.get(`${BASE_URL}/strings`);
  }

  static async createPost(body) {
    return axios.post(`${BASE_URL}/strings`, body);
  }
}
