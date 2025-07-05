import { useEffect, useRef, useState, memo } from 'react';

interface CyberTypeWriterProps {
  words: string[];
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
}

export default memo(function CyberTypeWriter({ 
  words, 
  delay = 3000, 
  typingSpeed = 150, 
  deletingSpeed = 75 
}: CyberTypeWriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const glitchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex];
    
    const typeWriter = () => {
      // Random glitch effect
      if (Math.random() < 0.05 && !isGlitching && text.length > 0) {
        setIsGlitching(true);
        if (glitchTimeoutRef.current) {
          clearTimeout(glitchTimeoutRef.current);
        }
        glitchTimeoutRef.current = setTimeout(() => setIsGlitching(false), 150);
      }

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

    let nextDelay = typingSpeed + Math.random() * 100; // Add randomness
    
    if (isWaiting) {
      nextDelay = delay;
    } else if (isDeleting) {
      nextDelay = deletingSpeed + Math.random() * 50;
    } else if (text.length === currentWord.length) {
      nextDelay = delay;
    }

    timeoutRef.current = setTimeout(typeWriter, nextDelay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (glitchTimeoutRef.current) {
        clearTimeout(glitchTimeoutRef.current);
      }
    };
  }, [text, wordIndex, isDeleting, isWaiting, words, delay, typingSpeed, deletingSpeed, isGlitching]);

  return (
    <div className="font-mono relative inline-block">
      <span className="text-electric-emerald font-bold">[</span>
      <span 
        className={`text-electric-cyan font-semibold ml-1 mr-1 transition-all duration-100 ${
          isGlitching ? 'animate-pulse filter blur-sm' : ''
        }`}
        style={{
          textShadow: isGlitching 
            ? '0 0 10px currentColor, 2px 0 0 #ff0000, -2px 0 0 #00ff00' 
            : '0 0 8px currentColor',
          transform: isGlitching ? 'translateX(2px)' : 'translateX(0)',
        }}
      >
        {text}
      </span>
      <span className="text-electric-emerald font-bold">]</span>
      <span 
        className="text-electric-cyan ml-1 font-bold animate-pulse"
        style={{
          textShadow: '0 0 10px currentColor',
          animationDuration: '1s'
        }}
      >
        █
      </span>
    </div>
  );
});