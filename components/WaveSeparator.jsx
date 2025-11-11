export default function WaveSeparator({ variant = "blue", className = "" }) {
  const file = variant === "peach" ? "/svg/waves/wave-peach.svg"
            : variant === "hero" ? "/svg/waves/wave-hero.svg"
            : "/svg/waves/wave-blue.svg";
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <img src={file} alt="wave separator" className="w-full anim-wave select-none pointer-events-none" />
    </div>
  );
}
