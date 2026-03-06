import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HELLO = ['H', 'E', 'L', 'L', 'O', ' '];
const WORDS = [
  ['W', 'O', 'R', 'L', 'D'],
  ['M', 'A', 'R', 'I', 'A'],
  ['A', 'N', 'N', 'I', 'E'],
  ['K', 'A', 'I', 'T', 'O'],
  ['N', 'O', 'A', 'H', '!'],
];

function randomScatter() {
  return {
    x: (Math.random() - 0.5) * 1800,
    y: (Math.random() - 0.5) * 1125,
    rotate: (Math.random() - 0.5) * 1080,
    duration: 3.5 + Math.random() * 1,
    delay: Math.random() * 0.3,
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
          transition: { duration: 0.9, ease: 'easeIn' },
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
  const [chars, setChars] = useState([...HELLO, ...WORDS[0]]);
  const wordIndexRef = useRef(0);

  // Repeat cycle every 8 seconds
  useEffect(() => {
    const id = setInterval(() => setTrigger(t => t + 1), 8000);
    return () => clearInterval(id);
  }, []);

  // At a random point during each scatter, swap WORLD ↔ MARIA
  useEffect(() => {
    if (trigger === 0) return;

    const swapDelay = 1000 + Math.random() * 1500; // 1–2.5s into the scatter
    const nextIndex = (wordIndexRef.current + 1) % WORDS.length;

    const timer = setTimeout(() => {
      setChars([...HELLO, ...WORDS[nextIndex]]);
      wordIndexRef.current = nextIndex;
    }, swapDelay);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <h1 className="text-white text-8xl font-normal font-['Inter',sans-serif] whitespace-nowrap tracking-wide">
      {chars.map((char, i) => (
        <TumblingLetter key={i} char={char} trigger={trigger} />
      ))}
    </h1>
  );
}
