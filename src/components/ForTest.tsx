import React from 'react';

const ForTest: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="py-4 bg-white shadow-md">
        <nav className="container flex justify-between items-center mx-auto">
          <div className="text-xl font-bold text-gray-800">My App</div>
          <button className="text-gray-600 hover:text-gray-800">Menu</button>
        </nav>
      </header>

      <main className="container mx-auto my-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-lg text-gray-700">
          This is a responsive design example using React and Tailwind CSS.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Feature 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Feature 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Feature 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="bg-white p-4 shadow-md">
            <h2 className="text-lg font-bold mb-2">Feature 4</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </main>

      <footer className="py-4 bg-gray-200 text-center">
        <p className="text-gray-600">© 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ForTest;
