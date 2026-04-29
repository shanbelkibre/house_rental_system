import { motion } from "framer-motion";
import React from "react";

type ShinyTextProps = {
  text: string;
  className?: string;
  baseColor?: string;
  shineColor?: string;
  durationSeconds?: number;
  spreadDegrees?: number;
};

export default function ShinyText({
  text,
  className,
  baseColor = "#64CEFB",
  shineColor = "#ffffff",
  durationSeconds = 3,
  spreadDegrees = 100,
}: ShinyTextProps) {
  const style: React.CSSProperties = {
    backgroundImage: `linear-gradient(${spreadDegrees}deg, ${baseColor} 0%, ${baseColor} 35%, ${shineColor} 50%, ${baseColor} 65%, ${baseColor} 100%)`,
    backgroundSize: "200% 100%",
    backgroundPosition: "0% 50%",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  };

  return (
    <motion.span
      className={className}
      style={style}
      animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
      transition={{
        duration: durationSeconds,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {text}
    </motion.span>
  );
}
