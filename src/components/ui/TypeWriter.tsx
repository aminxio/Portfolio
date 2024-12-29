import { useEffect, useRef } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
}

export default function TypeWriter({ words, delay = 2000 }: TypeWriterProps) {
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    let currentWord = 0;
    let currentChar = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const type = () => {
      const current = words[currentWord];
      if (!textRef.current) return;

      if (isDeleting) {
        textRef.current.textContent = current.substring(0, currentChar - 1);
        currentChar--;
      } else {
        textRef.current.textContent = current.substring(0, currentChar + 1);
        currentChar++;
      }

      if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        timeoutId = setTimeout(type, delay);
        return;
      }

      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length;
        timeoutId = setTimeout(type, 500);
        return;
      }

      timeoutId = setTimeout(type, isDeleting ? 50 : 100);
    };

    type();
    return () => clearTimeout(timeoutId);
  }, [words, delay]);

  return (
    <>
      <span ref={textRef} className="text-cyan-400"></span>
      <span className="animate-blink">|</span>
    </>
  );
}