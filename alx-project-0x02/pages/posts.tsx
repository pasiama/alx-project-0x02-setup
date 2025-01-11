/* eslint-disable @typescript-eslint/no-explicit-any */
// pages/posts.tsx
import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Posts Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Latest Posts
        </h1>
        {loading ? (
          <p className="text-lg text-center text-gray-600">Loading posts...</p>
        ) : posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                userId={post.userId}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500 text-lg">
            Oops! No posts available at the moment.
          </p>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Blog Haven. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Posts;
