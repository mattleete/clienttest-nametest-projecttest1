export default function DotGroup({ count = 3 }) {
  return (
    <div className="flex items-center gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-12 h-12 rounded-full bg-[#ff00fb] shrink-0" />
      ))}
    </div>
  );
}
