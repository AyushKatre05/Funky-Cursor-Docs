// pages/linear-gradient.tsx
"use client";
import { useState } from 'react';
import { AnimatedLinearGradientTrailCursor } from 'funky-cursor'; // Ensure this is the correct import path
import Layout from '@/components/Layout';

const LinearGradientTrailPage = () => {
  const [colors, setColors] = useState(['#ff0000', '#0000ff']); // Default gradient colors
  const [speed, setSpeed] = useState(1);          // Default speed

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center">Linear Gradient Trail Cursor</h1>
        <p className="mb-4 text-sm sm:text-base md:text-lg">
          The AnimatedLinearGradientTrailCursor creates an animated linear gradient trail effect following your cursor. Customize the properties below:
        </p>

        {/* Code Example Section */}
        <pre className="bg-gray-800 p-3 sm:p-4 md:p-6 rounded-md text-white text-xs sm:text-sm md:text-base overflow-auto mb-4">
          {`import { AnimatedLinearGradientTrailCursor } from 'funky-cursor';

const Example = () => {
  const [colors, setColors] = useState(['#ff0000', '#0000ff']); // Default gradient colors
  const [speed, setSpeed] = useState(1);          // Default speed

  return (
    <div>
      <AnimatedLinearGradientTrailCursor 
        colors={colors} 
        speed={speed} 
      />
    </div>
  );
};
`}
        </pre>

        {/* Input fields for customization */}
        <div className="mb-4">
          <label className="block mb-1 text-white">Gradient Colors:</label>
          <input
            type="color"
            value={colors[0]}
            onChange={(e) => {
              const newColors = [...colors];
              newColors[0] = e.target.value;
              setColors(newColors);
            }}
            className="rounded-full border-none w-16 h-16"
            style={{ backgroundColor: colors[0] }}
          />
          <input
            type="color"
            value={colors[1]}
            onChange={(e) => {
              const newColors = [...colors];
              newColors[1] = e.target.value;
              setColors(newColors);
            }}
            className="rounded-full border-none w-16 h-16"
            style={{ backgroundColor: colors[1] }}
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
          <AnimatedLinearGradientTrailCursor 
            colors={colors} 
            speed={speed} 
          />
          <p className="text-sm sm:text-base md:text-lg">Move your cursor around to see the animated linear gradient trail effect!</p>
        </div>
      </div>
    </Layout>
  );
};

export default LinearGradientTrailPage;
