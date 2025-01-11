import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/home">
                <div className="hover:text-blue-400">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="hover:text-blue-400">About</div>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <div className="hover:text-blue-400">Posts</div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
