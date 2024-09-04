
const API_KEY = '1bdcbbadf977d6001b666f71148cb673';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchFromApi = async (endpoint: string) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}&api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (error) {
    throw new Error(`Failed to fetch data: ${( error as any).message}`);
  }
};

