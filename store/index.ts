import { getAllPosts, getPostsBySearch } from '@/services/getPosts';
import { create } from 'zustand';

type usePosts = {
  posts: any[];
  isLoading: boolean;
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<usePosts>()(set => ({
  posts: [],
  isLoading: false,
  getAllPosts: async () => {
    set({ isLoading: true });
    const posts = await getAllPosts();
    set({ posts: posts, isLoading: false });
  },
  getPostsBySearch: async search => {
    set({ isLoading: true });
    const posts = await getPostsBySearch(search);
    set({ posts: posts, isLoading: false });
  },
}));
