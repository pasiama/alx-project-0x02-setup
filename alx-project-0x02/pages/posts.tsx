import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>List of posts will appear here.</p>
      </div>
    </>
  );
};

export default Posts;
