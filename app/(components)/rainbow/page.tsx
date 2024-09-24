// pages/rainbow.tsx
"use client";
import { useState } from 'react';
import { RainbowTrailCursor } from 'funky-cursor'; // Ensure this is the correct import path
import Layout from '@/components/Layout';

const RainbowTrailPage = () => {
  const [size, setSize] = useState(10);          // Default size
  const [trails, setTrails] = useState(5);       // Default trails
  const [speed, setSpeed] = useState(1);          // Default speed

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Rainbow Trail Cursor</h1>
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          The RainbowTrailCursor creates a rainbow effect following your cursor. Customize the properties below:
        </p>

        {/* Code Example Section */}
        <pre className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-md text-white text-xs sm:text-sm md:text-base overflow-auto mb-4">
          {`import { RainbowTrailCursor } from 'funky-cursor';

const Example = () => {
  const [size, setSize] = useState(10);          // Default size
  const [trails, setTrails] = useState(5);       // Default trails
  const [speed, setSpeed] = useState(1);          // Default speed

  return (
    <div>
      <RainbowTrailCursor 
        size={size} 
        trails={trails} 
        speed={speed} 
      />
    </div>
  );
};
`}
        </pre>

        {/* Input fields for customization */}
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
          <label className="block mb-1 text-white">Speed:</label>
          <input
            type="number"
            min="1"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            className="border rounded-md p-2 text-black"
          />
        </div>

        <div className="mt-8 border-2 border-gray-700 p-3 sm:p-4 md:p-6 relative">
          <RainbowTrailCursor 
            size={size} 
            trails={trails} 
            speed={speed} 
          />
          <p className="text-sm sm:text-base md:text-lg">Move your cursor around to see the rainbow trail effect!</p>
        </div>
      </div>
    </Layout>
  );
};

export default RainbowTrailPage;
