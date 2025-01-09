import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        title="Luxury Villa"
        content="Experience the best of luxury in our beautiful villas with top-notch amenities."
      />
      <Card
        title="Mountain Retreat"
        content="Escape to the mountains and enjoy a serene environment like never before."
      />
      <Card
        title="Beachfront Bliss"
        content="Relax by the beach with our exclusive beachfront properties."
      />
    </div>
  );
};

export default Home;
