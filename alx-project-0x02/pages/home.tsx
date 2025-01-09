import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  const [posts, setPosts] = useState([
    { title: "Luxury Villa", content: "Experience the best of luxury in our beautiful villas with top-notch amenities." },
    { title: "Mountain Retreat", content: "Escape to the mountains and enjoy a serene environment like never before." },
    { title: "Beachfront Bliss", content: "Relax by the beach with our exclusive beachfront properties." },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-6">
            <Header />

      <button
        onClick={() => setModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add New Post
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
};

export default Home;
