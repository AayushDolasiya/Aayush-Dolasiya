import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const greetings = [
  "Hello",
  "Namaste",
  "Hola",
  "Bonjour",
  "こんにちは",
  "안녕하세요",
  "你好",
  "Ciao",
  "Olá",
  "مرحبا",
  "Welcome"
];

interface IntroAnimationProps {
  onComplete: () => void;
  key?: string;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [index, setIndex] = useState(0);
  const [showGreetings, setShowGreetings] = useState(true);

  useEffect(() => {
    if (showGreetings) {
      if (index < greetings.length - 1) {
        // First word stays slightly longer, the rest flash rapidly
        const delay = index === 0 ? 400 : 250;
        const timeout = setTimeout(() => setIndex(index + 1), delay);
        return () => clearTimeout(timeout);
      } else {
        // Last word ("Welcome") stays a bit longer before transitioning
        const timeout = setTimeout(() => setShowGreetings(false), 600);
        return () => clearTimeout(timeout);
      }
    } else {
      // Show the final text for 1.7 seconds, keeping total time under 5 seconds
      const timeout = setTimeout(() => {
        onComplete();
      }, 1700);
      return () => clearTimeout(timeout);
    }
  }, [index, showGreetings, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
      initial={{ y: 0 }}
      exit={{
        y: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
      }}
    >
      <AnimatePresence mode="wait">
        {showGreetings ? (
          <motion.h1
            key={greetings[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
          >
            {greetings[index]}
          </motion.h1>
        ) : (
          <motion.div
            key="final-text"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center flex flex-col gap-3"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Hi, I'm Aayush.
            </h1>
            <p className="text-xl md:text-2xl font-light text-zinc-400">
              Full Stack Developer.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
