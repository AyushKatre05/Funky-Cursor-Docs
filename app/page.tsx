// pages/index.tsx
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Layout from "@/components/Layout";
import { ClipboardCopyIcon } from "lucide-react";

const HomePage = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("npm i funky-cursor");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Layout>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Hero Section */}
        <section className="py-12 text-center bg-gradient-to-r from-blue-500 to-purple-700">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to Funky Cursors
          </motion.h1>
          <motion.p
            className="text-lg md:text-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            A collection of unique, customizable cursor trail effects for your project.
          </motion.p>

          {/* Copy-to-Clipboard Installation Command */}
          <motion.div
            className="flex justify-center items-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <button
              className="px-6 py-3 bg-white text-gray-900 font-bold rounded-lg shadow-lg hover:bg-gray-200"
              onClick={handleCopy}
            >
              {copied ? "Copied!" : "Copy Install Command"}
            </button>
            <div className="flex items-center bg-gray-800 p-3 rounded-md">
              <code>npm i funky-cursor</code>
              <ClipboardCopyIcon
                className="h-6 w-6 text-white ml-2 cursor-pointer"
                onClick={handleCopy}
              />
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section className="py-12 bg-gray-800">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Features & Benefits
          </motion.h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Customizable Effects</h3>
              <p className="text-sm">
                Tailor each cursor effect to match your website’s style with adjustable props like color, size, speed, and more.
              </p>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Easy Integration</h3>
              <p className="text-sm">
                Just a few lines of code are all you need to integrate any of the effects into your project.
              </p>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Responsive & Lightweight</h3>
              <p className="text-sm">
                Optimized for performance and responsive on all screen sizes, ensuring a smooth user experience.
              </p>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Multiple Effects</h3>
              <p className="text-sm">
                Choose from a wide range of cursor effects including bubbles, stars, concentric lines, and more!
              </p>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-12 bg-gray-900">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How It Works
          </motion.h2>
          <div className="max-w-4xl mx-auto px-4 md:px-12">
            <p className="text-lg text-gray-300 mb-6">
              Integrating any of these cursor effects into your project is simple. Here’s a basic example and a guide to props you can use:
            </p>
            <pre className="bg-gray-800 p-4 rounded-md text-white overflow-auto text-sm">
              {`import { BubblesTrailCursor } from 'funky-cursor';

const MyComponent = () => (
  <div>
    <BubblesTrailCursor 
      color="blue"  // Customize the color of the bubbles
      size={10}     // Adjust the size of the bubbles
      speed={1.5}   // Control the speed of the trail effect
    />
  </div>
);`}
            </pre>
            <p className="text-lg text-gray-300 mt-6">
              <strong>Props:</strong>
            </p>
            <ul className="text-gray-300 list-disc list-inside">
              <li><strong>color:</strong> Sets the color of the effect (e.g., "red", "blue").</li>
              <li><strong>size:</strong> Adjusts the size of the effect (e.g., 10, 20).</li>
              <li><strong>speed:</strong> Controls the speed of the trail animation (e.g., 1.5, 2.0).</li>
              <li><strong>lifespan:</strong> Determines how long the trail lasts before disappearing.</li>
              <li><strong>dampening:</strong> Adjusts the effect’s responsiveness to cursor movement.</li>
            </ul>
          </div>
        </section>

        {/* Overview of Cursor Effects */}
        <section id="effects-overview" className="py-12 bg-gray-800">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Available Cursor Effects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12">
            {/* Cursor effect previews with links to documentation */}
            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Bubbles Trail Cursor</h3>
              <p className="text-sm">
                A bubble effect follows the cursor. Fun and playful for interactive experiences.
              </p>
              <Link href="/bubbles">
                <p className="text-blue-400 underline mt-2 block">Read Documentation</p>
              </Link>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Glow Trail Cursor</h3>
              <p className="text-sm">
                Creates a glowing trail behind the cursor, adding a modern and dynamic effect.
              </p>
              <Link href="/glow">
                <p className="text-blue-400 underline mt-2 block">Read Documentation</p>
              </Link>
            </motion.div>

            <motion.div
              className="p-4 bg-gray-700 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold">Ripple Trail Cursor</h3>
              <p className="text-sm">
                Adds a ripple effect as the cursor moves, giving a calming water-like feel.
              </p>
              <Link href="/ripple">
                <p className="text-blue-400 underline mt-2 block">Read Documentation</p>
              </Link>
            </motion.div>

            {/* Add more effects as necessary */}
          </div>
        </section>

        <footer className="py-8 bg-gray-900 text-center">
          <p className="text-gray-400">
            © 2024 Funky Cursors. All Rights Reserved.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;
