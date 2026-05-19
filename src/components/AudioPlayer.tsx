import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Note: Most browsers block auto-play without user interaction.
  // This component waits for the first interaction to start or relies on the user clicking the button.
  
  useEffect(() => {
    // Attempt to play music when interaction happens if it was supposedly playing
    const handleFirstInteraction = () => {
      if (audioRef.current && isMuted === false && !isPlaying) {
        audioRef.current.play().catch(e => console.log("Autoplay blocked", e));
        setIsPlaying(true);
      }
      window.removeEventListener("click", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    return () => window.removeEventListener("click", handleFirstInteraction);
  }, [isMuted, isPlaying]);

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    if (isMuted) {
      audioRef.current.play().catch(e => console.log("Play error", e));
      audioRef.current.muted = false;
      setIsMuted(false);
      setIsPlaying(true);
    } else {
      audioRef.current.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/speedo.mp3"
        loop
        muted={isMuted}
      />
      
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        onClick={toggleMute}
        className="fixed bottom-10 right-10 z-[100] w-14 h-14 rounded-full glass-card flex items-center justify-center text-[var(--color-secondary)] hover:scale-110 active:scale-95 transition-all shadow-[var(--glow-gold)] border-[var(--color-secondary)]/20"
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        <AnimatePresence mode="wait">
          {isMuted ? (
            <motion.div
              key="muted"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <VolumeX className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="playing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative"
            >
              <Volume2 className="w-6 h-6" />
              {/* Animated sound waves */}
              <span className="absolute -inset-2 rounded-full border border-[var(--color-secondary)]/40 animate-ping opacity-40" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}
