import React, { useEffect, useState } from 'react';

export default function AnimatedHeading({ text, className }) {
  const [startAnim, setStartAnim] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartAnim(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const lines = text.split('\n');
  let charIndexAbsolute = 0;
  const charDelay = 30; // 30ms

  return (
    <h1 className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split('').map((char, charIndex) => {
            const currentDelay = charIndexAbsolute * charDelay;
            charIndexAbsolute++;
            
            return (
              <span
                key={charIndex}
                className="inline-block transition-all duration-500 ease-out"
                style={{
                  opacity: startAnim ? 1 : 0,
                  transform: startAnim ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDelay: `${currentDelay}ms`,
                  whiteSpace: 'pre',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
