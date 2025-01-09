/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/posts.tsx
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        const formattedPosts = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Posts</h1>
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <PostCard
              key={index}
              userId={post.userId}
              title={post.title}
              content={post.content}
            />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    </>
  );
};

export default Posts;
