import { getAllPosts } from '@/services/getPosts';
import { Posts } from '@/services/types';
import { Metadata } from 'next';

async function getData(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      //time for resend request
      revalidate: 60,
    },
  });
  const data = await response.json();

  return data;
}

type Props = {
  params: {
    id: string;
  };
};

//SSG - Static Site Generation
export async function generateStaticParams() {
  const posts: Posts[] = await getAllPosts();

  return posts.map(post => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
