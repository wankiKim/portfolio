export default function AnimatedBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="aurora-blob left-[-10%] top-[-15%] h-[55vh] w-[55vw] bg-teal-500/[0.07]"
        style={{ animation: "aurora-drift-1 26s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob right-[-15%] top-[20%] h-[60vh] w-[50vw] bg-blue-600/[0.08]"
        style={{ animation: "aurora-drift-2 32s ease-in-out infinite" }}
      />
      <div
        className="aurora-blob bottom-[-20%] left-[20%] h-[50vh] w-[45vw] bg-indigo-500/[0.06]"
        style={{ animation: "aurora-drift-3 38s ease-in-out infinite" }}
      />
    </div>
  );
}
