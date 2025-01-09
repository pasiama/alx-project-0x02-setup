import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/home">
                <a className="hover:text-blue-400">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="hover:text-blue-400">About</a>
              </Link>
            </li>
            <li>
              <Link href="/posts">
                <a className="hover:text-blue-400">Posts</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
