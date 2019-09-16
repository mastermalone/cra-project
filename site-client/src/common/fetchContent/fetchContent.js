import axios from 'axios';

const fetchContent = async (config) => {
  return await axios({
    method: 'get',
    url: config.url
  });
};

export default fetchContent;