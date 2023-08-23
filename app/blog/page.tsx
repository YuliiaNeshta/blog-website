import { Posts } from '@/components/Posts';
import { PostSearch } from '@/components/PostSearch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default function Blog() {
  return (
    <>
      <h1>Blog</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
