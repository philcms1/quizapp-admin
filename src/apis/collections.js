/**
 * Crafted in Erebor by thorin on 2019-02-11
 */
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://harrypotterquizapp-c202f.firebaseio.com/'
});

export const fetchCollections = () => {
  return axiosInstance
      .get('collections.json')
      .then(res => res.data);
};
