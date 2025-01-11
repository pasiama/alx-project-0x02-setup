import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      title: "Luxury Villa",
      content: "Experience the best of luxury in our beautiful villas with top-notch amenities.",
    },
    {
      title: "Mountain Retreat",
      content: "Escape to the mountains and enjoy a serene environment like never before.",
    },
    {
      title: "Beachfront Bliss",
      content: "Relax by the beach with our exclusive beachfront properties.",
    },
    {
      title: "Luxury Villa",
      content: "Experience the best of luxury in our beautiful villas with top-notch amenities.",
    },
    {
      title: "Mountain Retreat",
      content: "Escape to the mountains and enjoy a serene environment like never before.",
    },
    {
      title: "Beachfront Bliss",
      content: "Relax by the beach with our exclusive beachfront properties.",
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts((prevPosts) => [...prevPosts, { title, content }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-12 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Welcome to Dream Escapes</h1>
        <p className="text-lg mb-6">
          Explore breathtaking properties and destinations tailored just for you.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Add a New Post
        </button>
      </section>

      {/* Posts Section */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-black">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </section>

      {/* Post Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Dream Escapes. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            {/* Replace # with actual social media links */}
            <a href="#" className="hover:underline">
              Twitter
            </a>
            <a href="#" className="hover:underline">
              LinkedIn
            </a>
            <a href="#" className="hover:underline">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
