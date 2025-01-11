import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* About Section */}
      <section className="py-12 my-auto px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our platform! We are committed to delivering exceptional
          experiences through cutting-edge technology and user-focused designs.
          Explore our journey, mission, and dedication to excellence.
        </p>

        {/* Buttons Showcase */}
        <div className="flex flex-wrap justify-center gap-6">
          <Button size="small" shape="rounded-sm">
            Small Button
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Button
          </Button>
          <Button size="large" shape="rounded-full">
            Large Button
          </Button>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
};

export default About;
