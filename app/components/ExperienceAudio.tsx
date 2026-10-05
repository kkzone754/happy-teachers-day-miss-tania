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
      audio.volume = 0.10;
    };

    const handleRestore = () => {
      audio.volume = 0.32;
    };

    window.addEventListener("experience:duck-music", handleDuck);
    window.addEventListener("experience:restore-music", handleRestore);

    return () => {
      window.removeEventListener("experience:duck-music", handleDuck);
      window.removeEventListener("experience:restore-music", handleRestore);
    };
  }, []);

  useEffect(() => {
    if (started) return;
    const audio = audioRef.current;
    if (audio) audio.volume = 0.32;
  }, [started]);

  return (
    <audio
      id="experience-background-audio"
      ref={audioRef}
      src="/background.mp3"
      preload="auto"
      loop
      aria-hidden="true"
    />
  );
}
