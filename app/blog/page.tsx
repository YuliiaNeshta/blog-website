'use client';
import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import { getAllPosts } from '@/services/getPosts';
import { useEffect, useState } from 'react';

//TODO: take out to component
// export const metadata: Metadata = {
//   title: 'Blog | Next App',
// };

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <PostSearch onSearch={setPosts} />
      {isLoading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
}
