export default function AmbientBackground() {
  return (
    <>
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-gradient-to-b from-amber-500/10 via-cyan-500/5 to-transparent blur-[140px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "9s" }}
      ></div>
      <div
        className="fixed -bottom-40 -right-20 w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] pointer-events-none -z-10 animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>
    </>
  );
}
