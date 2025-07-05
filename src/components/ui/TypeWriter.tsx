import { useEffect, useRef, useState, memo } from 'react';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export default memo(function TypeWriter({ 
  words, 
  delay = 2000, 
  typingSpeed = 120, 
  deletingSpeed = 60 
}: TypeWriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    
    const typeWriter = () => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      if (isDeleting) {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        if (text.length < currentWord.length) {
          setText(currentWord.slice(0, text.length + 1));
        } else {
          setIsWaiting(true);
        }
      }
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    let nextDelay = typingSpeed;
    
    if (isWaiting) {
      nextDelay = delay;
    } else if (isDeleting) {
      nextDelay = deletingSpeed;
    } else if (text.length === currentWord.length) {
      nextDelay = delay;
    }

    timeoutRef.current = setTimeout(typeWriter, nextDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, wordIndex, isDeleting, isWaiting, words, delay, typingSpeed, deletingSpeed]);

  return (
    <div className="font-mono relative inline-block">
      <span className="text-slate-500">{'>'}</span>
      <span className="text-electric-blue ml-2 font-semibold">
        <span className="drop-shadow-lg">{text}</span>
        <span className="animate-pulse ml-1 text-electric-purple font-bold">|</span>
      </span>
    </div>
  );
});