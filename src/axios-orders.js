import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-app-47682.firebaseio.com/',

});

export default instance;