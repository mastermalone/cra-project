import axios from 'axios';

const fetchContent = async (config) => {
  return await axios({
    method: config.method,
    url: config.url
  });
};

export default fetchContent;