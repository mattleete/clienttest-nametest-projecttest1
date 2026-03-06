import { motion, useAnimation } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

const TEXT = 'HELLO WORLD';

function TumblingLetter({ char, scatterX, scatterY, scatterRotate, scatterDelay, trigger }) {
  const controls = useAnimation();

  useEffect(() => {
    if (trigger === 0) return;

    let active = true;
    const run = async () => {
      // Scatter out
      await controls.start({
        x: scatterX,
        y: scatterY,
        rotate: scatterRotate,
        transition: { duration: 0.6, ease: [0.4, 0, 1, 1], delay: scatterDelay },
      });
      // Pull back in
      if (active) {
        await controls.start({
          x: 0,
          y: 0,
          rotate: 0,
          transition: { duration: 0.9, ease: [0, 0, 0.2, 1] },
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

  // Generate stable random scatter targets once
  const letterData = useMemo(() =>
    TEXT.split('').map(() => ({
      x: (Math.random() - 0.5) * 800,
      y: (Math.random() - 0.5) * 500,
      rotate: (Math.random() - 0.5) * 720,
    })),
    []
  );

  // Repeat every 10 seconds
  useEffect(() => {
    const id = setInterval(() => setTrigger(t => t + 1), 10000);
    return () => clearInterval(id);
  }, []);

  return (
    <h1 className="text-white text-8xl font-normal font-['Inter',sans-serif] whitespace-nowrap tracking-wide">
      {TEXT.split('').map((char, i) => (
        <TumblingLetter
          key={i}
          char={char}
          scatterX={letterData[i].x}
          scatterY={letterData[i].y}
          scatterRotate={letterData[i].rotate}
          scatterDelay={i * 0.05}
          trigger={trigger}
        />
      ))}
    </h1>
  );
}
