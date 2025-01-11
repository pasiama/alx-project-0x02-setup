// components/common/PostCard.tsx
import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 mb-4 bg-white">
      <h2 className="text-xl font-semibold mb-2 text-black capitalize">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <span className="text-sm text-black italic">Posted by User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
