import DotGroup from './DotGroup';

export default function AnimateCard({ dotCount = 3 }) {
  return (
    <div className="flex items-center justify-between bg-[#6fff87] rounded-[8px] p-8 overflow-hidden h-full w-full">
      <DotGroup count={dotCount} />
      <span className="text-black text-4xl font-normal font-['Inter',sans-serif] whitespace-nowrap shrink-0">
        ANIMATE?
      </span>
      <DotGroup count={dotCount} />
    </div>
  );
}
