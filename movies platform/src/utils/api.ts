const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchData = async (endpoint: string) => {
  const response = await fetch(`${BASE_URL}/${endpoint}?api_key=1bdcbbadf977d6001b666f71148cb673`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};
