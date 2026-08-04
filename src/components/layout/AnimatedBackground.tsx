export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="glow-blob right-[-20%] bottom-[-25%] h-[65vh] w-[55vw] bg-orange-600/[0.07]"
        style={{ animation: "glow-drift-1 34s ease-in-out infinite" }}
      />
      <div
        className="glow-blob left-[-15%] top-[-20%] h-[50vh] w-[45vw] bg-amber-700/[0.05]"
        style={{ animation: "glow-drift-2 28s ease-in-out infinite" }}
      />
    </div>
  );
}
