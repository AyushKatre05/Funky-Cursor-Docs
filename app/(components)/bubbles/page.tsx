// pages/bubbles.tsx
"use client";
import { useState } from 'react';
import { BubblesTrailCursor } from 'funky-cursor'; // Ensure this is the correct import path
import Layout from '@/components/Layout';

const BubblesTrailPage = () => {
  const [color, setColor] = useState('#ff00ff'); // Default color
  const [size, setSize] = useState(10);          // Default size
  const [trails, setTrails] = useState(5);       // Default trails
  const [lifespan, setLifespan] = useState(500); // Default lifespan (in ms)

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Bubbles Trail Cursor</h1>
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          The BubblesTrailCursor adds a bubble trail effect to the cursor. You can customize the properties below:
        </p>

        {/* Code Example Section */}
        <pre className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-md text-white text-xs sm:text-sm md:text-base overflow-auto mb-4">
          {`import { BubblesTrailCursor } from 'funky-cursor';

const Example = () => {
  const [color, setColor] = useState('#ff00ff'); // Default color
  const [size, setSize] = useState(10);          // Default size
  const [trails, setTrails] = useState(5);       // Default trails
  const [lifespan, setLifespan] = useState(500); // Default lifespan (in ms)

  return (
    <div>
      <BubblesTrailCursor 
        color={color} 
        size={size} 
        trails={trails} 
        lifespan={lifespan} 
      />
    </div>
  );
};
`}
        </pre>

        {/* Input fields for customization */}
        <div className="mb-4">
          <label className="block mb-1 text-white">Color:</label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="rounded-full border-none w-16 h-16"
            style={{ backgroundColor: color }}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Size:</label>
          <input
            type="range"
            min="5"
            max="50"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="border rounded-md p-2 text-black"
          />
          <span className="text-black">Size: {size}</span>
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Number of Trails:</label>
          <input
            type="number"
            min="1"
            max="20"
            value={trails}
            onChange={(e) => setTrails(Number(e.target.value))}
            className="border rounded-md p-2 text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-white">Lifespan (ms):</label>
          <input
            type="number"
            min="100"
            value={lifespan}
            onChange={(e) => setLifespan(Number(e.target.value))}
            className="border rounded-md p-2 text-black"
          />
        </div>

        <div className="mt-8 border-2 border-gray-700 p-3 sm:p-4 md:p-6 relative">
          <BubblesTrailCursor 
            color={color} 
            size={size} 
            trails={trails} 
            lifespan={lifespan} 
          />
          <p className="text-sm sm:text-base md:text-lg">Move your cursor around to see the bubbles trail effect!</p>
        </div>
      </div>
    </Layout>
  );
};

export default BubblesTrailPage;