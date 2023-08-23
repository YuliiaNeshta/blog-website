export const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) throw new Error('Fetch error');

  return response.json();
};

export const getPostsBySearch = async (value: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${value}`);

  if (!response.ok) throw new Error('Fetch error');

  return response.json();
};
