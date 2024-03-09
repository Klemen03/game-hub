import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '177900c1572744c5b26c6320ef86dbae',
  },
});
