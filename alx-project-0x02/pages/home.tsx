import Link from "next/link";

export default function Home() {
       return (
        <div>
              <h1>Welcome to my React App!</h1>
              <p>This is a simple React application.</p>
              <Link href="/about">About</Link> | <Link href="/contact">Contact</Link>
              {/* Add other routes here */}
        </div>
       );
    }