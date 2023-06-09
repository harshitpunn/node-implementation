import axios from 'axios';

export const getData = async (slug = '', params) => {
  return await axios.get(`${slug !== '' ? slug + '/' : ''}${params}`);
};

export const postData = async (slug = '', params) => {
  return await axios.post(`${slug}`, params);
};
