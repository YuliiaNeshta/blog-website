'use client';

import { usePosts } from '@/store';
import Link from 'next/link';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';

const Posts = () => {
  const [posts, isLoading, getAllPosts] = usePosts(state => [state.posts, state.isLoading, state.getAllPosts], shallow);

  useEffect(() => {
    getAllPosts();
  }, []);

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
