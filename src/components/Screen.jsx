import TopBar from './TopBar';
import DotGroup from './DotGroup';
import AnimateCard from './AnimateCard';

export default function Screen() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center"
      style={{ background: 'linear-gradient(132deg, rgb(82, 27, 163) 4%, rgb(33, 15, 15) 105%)' }}
    >
      <div className="w-full max-w-5xl px-8 flex flex-col gap-16">
        {/* Top bars */}
        <div className="flex flex-col gap-4">
          <TopBar
            bg="yellow"
            left="Hi Maria!"
            right={
              <span className="text-black text-4xl font-normal font-['Inter',sans-serif] whitespace-nowrap">
                Hello world
              </span>
            }
          />
          <TopBar
            left="SECOND TEST"
            right={<DotGroup count={3} />}
          />
        </div>

        {/* Hero text */}
        <div className="text-center">
          <h1 className="text-white text-8xl font-normal font-['Inter',sans-serif] whitespace-nowrap tracking-wide">
            HELLO WORLD
          </h1>
        </div>

        {/* Bottom cards */}
        <div className="flex gap-7 h-[200px]">
          <div className="flex-[4]">
            <AnimateCard dotCount={3} />
          </div>
          <div className="flex-[3]">
            <AnimateCard dotCount={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
