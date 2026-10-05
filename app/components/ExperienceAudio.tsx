"use client";

import { useEffect, useRef } from "react";

type ExperienceAudioProps = {
  started: boolean;
};

export default function ExperienceAudio({ started }: ExperienceAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleDuck = () => {
      audio.volume = 0.08;
    };

    const handleRestore = () => {
      audio.volume = 0.18;
    };

    window.addEventListener("experience:duck-music", handleDuck);
    window.addEventListener("experience:restore-music", handleRestore);

    return () => {
      window.removeEventListener("experience:duck-music", handleDuck);
      window.removeEventListener("experience:restore-music", handleRestore);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !started) return;

    audio.volume = 0.18;
    audio.loop = true;

    const play = async () => {
      try {
        await audio.play();
      } catch {
        // Browser autoplay policy may still block playback.
      }
    };

    void play();
  }, [started]);

  return (
    <audio
      ref={audioRef}
      src="/background.mp3"
      preload="auto"
      loop
      aria-hidden="true"
    />
  );
}
