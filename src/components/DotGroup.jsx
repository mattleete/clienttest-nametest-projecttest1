import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function randomBrightColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 100%, 60%)`;
}

export default function DotGroup({ count = 3 }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeColor, setActiveColor] = useState('#ff00fb');

  useEffect(() => {
    let timer;

    const run = () => {
      // Wait a random interval, then flash one dot
      timer = setTimeout(() => {
        const idx = Math.floor(Math.random() * count);
        setActiveIndex(idx);
        setActiveColor(randomBrightColor());

        // Hold the colour briefly, then reset and schedule the next flash
        timer = setTimeout(() => {
          setActiveIndex(null);
          run();
        }, 500 + Math.random() * 500);
      }, 1500 + Math.random() * 3500);
    };

    run();
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="flex items-center gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="w-12 h-12 rounded-full shrink-0"
          animate={{ backgroundColor: i === activeIndex ? activeColor : '#ff00fb' }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
}
