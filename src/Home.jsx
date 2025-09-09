import React from "react";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Featured Movies</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Example Movies */}
        <div className="text-center">
          <img
            src="/movies/1.jpeg"
            alt="Storm"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h2 className="mt-2 font-semibold">Storm</h2>
          <p>2017</p>
        </div>

        <div className="text-center">
          <img
            src="/movies/3.jpg"
            alt="Her"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <h2 className="mt-2 font-semibold">Her</h2>
          <p>2013</p>
        </div>
      </div>
    </div>
  );
};

export default Home;