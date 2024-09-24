// pages/animatedConcentricLines.tsx
"use client";
import { useState } from 'react';
import { AnimatedConcentricLinesTrailCursor } from 'funky-cursor'; // Ensure this is the correct import path
import Layout from '@/components/Layout';

const AnimatedConcentricLinesPage = () => {
  const [color, setColor] = useState('#ffffff'); // Default color
  const [speed, setSpeed] = useState(1);           // Default speed

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Animated Concentric Lines Trail Cursor</h1>
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          The AnimatedConcentricLinesTrailCursor creates an animated concentric lines effect following the cursor. Customize the properties below:
        </p>
        
        {/* Code Example Section */}
        <pre className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-md text-white text-xs sm:text-sm md:text-base overflow-auto mb-4">
          {`import { AnimatedConcentricLinesTrailCursor } from 'funky-cursor';

const Example = () => {
  const [color, setColor] = useState('#ffffff'); // Default color
  const [speed, setSpeed] = useState(1);           // Default speed

  return (
    <div>
      <AnimatedConcentricLinesTrailCursor 
        color={color} 
        speed={speed} 
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
          <AnimatedConcentricLinesTrailCursor 
            color={color} 
            speed={speed} 
          />
          <p className="text-sm sm:text-base md:text-lg">Move your cursor around to see the animated concentric lines effect!</p>
        </div>
      </div>
    </Layout>
  );
};

export default AnimatedConcentricLinesPage;
