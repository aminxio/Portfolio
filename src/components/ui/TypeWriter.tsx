import { useEffect, useRef } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number; // delay between typing words
}

export default function TypeWriter({ words, delay = 2000 }: TypeWriterProps) {
  const textRef = useRef<HTMLSpanElement>(null); // Reference to span element to update text
  const timeoutId = useRef<NodeJS.Timeout | null>(null); // Store the timeout ID

  useEffect(() => {
    let currentWord = 0;
    let currentChar = 0;
    let isDeleting = false;

    const type = () => {
      const current = words[currentWord];

      // Ensure textRef is available before manipulating the DOM
      if (!textRef.current) return;

      // Typing and Deleting logic
      if (isDeleting) {
        textRef.current.textContent = current.substring(0, currentChar - 1);
        currentChar--;
      } else {
        textRef.current.textContent = current.substring(0, currentChar + 1);
        currentChar++;
      }

      // After typing the word, pause before deleting it
      if (!isDeleting && currentChar === current.length) {
        isDeleting = true;
        timeoutId.current = setTimeout(type, delay); // Wait before starting to delete
        return;
      }

      // After deleting the word, move to the next word
      if (isDeleting && currentChar === 0) {
        isDeleting = false;
        currentWord = (currentWord + 1) % words.length; // Loop through the words array
        timeoutId.current = setTimeout(type, 500); // Pause before typing the next word
        return;
      }

      // Control typing speed: slower for typing, faster for deleting
      timeoutId.current = setTimeout(type, isDeleting ? 50 : 100);
    };

    type(); // Start the typewriter effect

    // Cleanup timeout when component unmounts
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current); // Prevent memory leaks
      }
    };
  }, [words, delay]); // Dependencies: words array and delay

  return (
    <>
      <span ref={textRef} className="text-cyan-400"></span>
      <span className="animate-blink">|</span>
    </>
  );
}
