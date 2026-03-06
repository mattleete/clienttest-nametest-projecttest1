export default function TopBar({ left, right, bg = '#6fff87' }) {
  return (
    <div className="flex items-center justify-between w-full rounded-[8px] p-8 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="text-black text-4xl font-normal font-['Inter',sans-serif] whitespace-nowrap shrink-0">
        {left}
      </div>
      <div className="shrink-0">{right}</div>
    </div>
  );
}
