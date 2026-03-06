import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const TEXT = 'HELLO WORLD';

function randomScatter() {
  return {
    x: (Math.random() - 0.5) * 1200,
    y: (Math.random() - 0.5) * 750,
    rotate: (Math.random() - 0.5) * 1080,
    duration: 2.5 + Math.random() * 1,   // 2.5–3.5s per letter
    delay: Math.random() * 0.3,          // 0–0.3s random stagger
  };
}

function TumblingLetter({ char, trigger }) {
  const controls = useAnimation();

  useEffect(() => {
    if (trigger === 0) return;

    const { x, y, rotate, duration, delay } = randomScatter();
    let active = true;

    const run = async () => {
      await controls.start({
        x,
        y,
        rotate,
        transition: { duration, ease: 'easeOut', delay },
      });
      if (active) {
        await controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          transition: { duration: 1.5, ease: 'easeIn' },
        });
      }
    };
    run();
    return () => { active = false; };
  }, [trigger]);

  if (char === ' ') return <span className="inline-block w-10" />;

  return (
    <motion.span animate={controls} style={{ display: 'inline-block' }}>
      {char}
    </motion.span>
  );
}

export default function AnimatedHeading() {
  const [trigger, setTrigger] = useState(1);

  useEffect(() => {
    const id = setInterval(() => setTrigger(t => t + 1), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="text-white text-8xl font-normal font-['Inter',sans-serif] whitespace-nowrap tracking-wide">
      {TEXT.split('').map((char, i) => (
        <TumblingLetter key={i} char={char} trigger={trigger} />
      ))}
    </h1>
  );
}
