"use client";
import Link from "next/link";
import { HomeIcon } from "lucide-react"; // Using lucide-react for a nice home icon

const Navbar = () => {
  const cursors = [
    { name: "Bubbles", color: "bg-blue-500", link: "/bubbles" },
    { name: "Glow", color: "bg-yellow-500", link: "/glow" },
    { name: "Particle Line", color: "bg-green-500", link: "/particle-line" },
    { name: "Ripple", color: "bg-red-500", link: "/ripple" },
    { name: "Sparkle", color: "bg-purple-500", link: "/sparkle" },
    { name: "Starburst", color: "bg-pink-500", link: "/starburst" },
    { name: "Wave", color: "bg-teal-500", link: "/wave" },
    { name: "Swirl", color: "bg-indigo-500", link: "/swirl" },
    { name: "Spiral", color: "bg-yellow-300", link: "/spiral" },
    { name: "Snowfall", color: "bg-white", link: "/snowfall" },
    { name: "Neon Glow", color: "bg-cyan-500", link: "/neon-glow" },
    { name: "Laser", color: "bg-red-600", link: "/laser" },
    { name: "Firework", color: "bg-orange-400", link: "/firework" },
    { name: "Fire", color: "bg-orange-600", link: "/fire" },
    { name: "Confetti", color: "bg-green-400", link: "/confetti" },
    { name: "Particle", color: "bg-gray-600", link: "/particle" },
    { name: "Starfield", color: "bg-gray-700", link: "/starfield" },
    { name: "Liquid", color: "bg-blue-200", link: "/liquid" },
    { name: "Rainbow", color: "bg-pink-300", link: "/rainbow" },
    { name: "Galaxy", color: "bg-purple-700", link: "/galaxy" },
    { name: "Star", color: "bg-yellow-500", link: "/star" },
    { name: "Spiral Line", color: "bg-pink-200", link: "/spiral-line" },
    { name: "Zigzag Line", color: "bg-green-200", link: "/zigzag-line" },
    { name: "Concentric Lines", color: "bg-green-300", link: "/concentric-lines" },
    { name: "Diagonal Lines", color: "bg-blue-400", link: "/diagonal-lines" },
    { name: "Linear Gradient", color: "bg-purple-400", link: "/linear-gradient" },
    { name: "Glowing", color: "bg-yellow-200", link: "/glowing" },
    { name: "Ink Drop", color: "bg-gray-500", link: "/ink-drop" },
    { name: "Laser Beam", color: "bg-red-800", link: "/laser-beam" },
    { name: "Waveform Line", color: "bg-purple-600", link: "/waveform-line" },
  ];

  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
      <div className="flex space-x-6 items-center">
        {/* Home Button */}
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-full bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white w-12 h-12 justify-center">
            <HomeIcon className="w-6 h-6" />
          </div>
        </Link>

        {/* Cursor Trail Swatches */}
        {cursors.map((cursor) => (
          <Link key={cursor.name} href={cursor.link}>
            <div className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
              <span className={`${cursor.color} rounded-full w-4 h-4 block`}></span>
              <span className="text-sm">{cursor.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
