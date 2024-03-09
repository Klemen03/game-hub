import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '3ff1ee77d7d94733a7a51a7f02a08ce2',
  },
});
