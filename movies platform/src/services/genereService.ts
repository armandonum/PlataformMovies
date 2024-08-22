
import { fetchData } from '../utils/api';

export const fetchGeneres = async () => {
  return fetchData('/genere/movie/list');
};
