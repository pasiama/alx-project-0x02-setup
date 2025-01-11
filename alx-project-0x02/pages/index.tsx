import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
        <p className="text-lg mb-6">
          Discover insightful articles, tips, and stories crafted just for you.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Posts
          </button>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
            About Us
          </button>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Replace placeholders with dynamic content */}
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={`https://via.placeholder.com/300x200?text=Post+${index + 1}`}
                  alt={`Post ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Post Title {index + 1}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the post goes here. Engage your
                    audience with a captivating summary.
                  </p>
                  <button className="text-blue-500 font-semibold hover:underline">
                    Read More
                  </button>
                </div>
              </div>
            ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {/* Replace placeholders with dynamic categories */}
          {["Tech", "Lifestyle", "Travel", "Food", "Health"].map((category) => (
            <button
              key={category}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} My Blog. All Rights Reserved.
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
}

