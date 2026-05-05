const orbs = [
  {
    size: 400,
    top: "10%",
    right: "-5%",
    delay: "0s",
    duration: "8s",
    opacity: 0.08,
  },
  {
    size: 300,
    bottom: "15%",
    left: "-8%",
    delay: "2s",
    duration: "10s",
    opacity: 0.06,
  },
  {
    size: 200,
    top: "40%",
    right: "15%",
    delay: "4s",
    duration: "7s",
    opacity: 0.05,
  },
];

const FloatingOrbs = () => (
  <>
    {orbs.map((orb, i) => (
      <div
        key={i}
        className="absolute rounded-full pointer-events-none"
        style={{
          width: orb.size,
          height: orb.size,
          top: orb.top,
          bottom: orb.bottom as string | undefined,
          left: orb.left as string | undefined,
          right: orb.right as string | undefined,
          opacity: orb.opacity,
          background:
            "radial-gradient(circle, hsl(263 86% 76%), transparent 70%)",
          animation: `float ${orb.duration} ease-in-out infinite`,
          animationDelay: orb.delay,
          willChange: "transform",
        }}
        aria-hidden="true"
      />
    ))}
  </>
);

export default FloatingOrbs;
