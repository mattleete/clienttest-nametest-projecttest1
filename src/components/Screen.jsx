import { motion } from 'framer-motion';
import TopBar from './TopBar';
import DotGroup from './DotGroup';
import AnimateCard from './AnimateCard';
import AnimatedHeading from './AnimatedHeading';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Section() {
  return (
    <div className="w-full max-w-5xl px-8 py-24 flex flex-col gap-16">
      {/* Top bars */}
      <div className="flex flex-col gap-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TopBar
            bg="yellow"
            left="Hi Maria, Annie, Kaitlyn and Noah!"
            right={
              <span className="text-black text-4xl font-normal font-['Inter',sans-serif] whitespace-nowrap">
                Hello world
              </span>
            }
          />
        </motion.div>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
        >
          <TopBar
            left="SECOND TEST"
            right={<DotGroup count={3} />}
          />
        </motion.div>
      </div>

      {/* Hero text */}
      <motion.div
        className="text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AnimatedHeading />
      </motion.div>

      {/* Bottom cards */}
      <div className="flex gap-7 h-[200px]">
        <motion.div
          className="flex-[4]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <AnimateCard dotCount={3} />
        </motion.div>
        <motion.div
          className="flex-[3]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.15 }}
        >
          <AnimateCard dotCount={2} />
        </motion.div>
      </div>
    </div>
  );
}

export default function Screen() {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ background: 'linear-gradient(180deg, rgb(82, 27, 163) 0%, rgb(33, 15, 15) 100%)' }}
    >
      <Section />
      <Section />
      <Section />
    </div>
  );
}
