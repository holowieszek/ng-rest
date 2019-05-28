import axios from 'axios';

const instance = axios.create();

instance.interceptors.request.use(config => {
  if (config.url.includes('omdbapi.com')) {
    config.params = { apikey: process.env.OMDB_API };
  }

  return config;
});

export default instance;
