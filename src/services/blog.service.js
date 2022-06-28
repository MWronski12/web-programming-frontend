import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/";

class BlogService {
  getPost(id) {
    return axios.get(API_URL + `posts/${id}`);
  }

  getAllPosts() {
    return axios.get(API_URL + `posts`);
  }

  createPost(post) {
    return axios.post(API_URL + "posts", post, { headers: authHeader() });
  }
}

export default new BlogService();
