"use client";

import { useState } from "react";
import Intro from "./components/Intro";
import StoryScene from "./components/StoryScene";
import ConfidenceScene from "./components/ConfidenceScene";
import GuidanceScene from "./components/GuidanceScene";
import AladdinScene from "./components/AladdinScene";
import TeaScene from "./components/TeaScene";
import SongScene from "./components/SongScene";
import StayedScene from "./components/StayedScene";
import TeachersDayScene from "./components/TeachersDayScene";
import ExperienceAtmosphere from "./components/ExperienceAtmosphere";
import ExperienceDepth from "./components/ExperienceDepth";
import ExperienceParticles from "./components/ExperienceParticles";
import CinematicTransitions from "./components/CinematicTransitions";
import ExperienceAudio from "./components/ExperienceAudio";

export default function Home() {
  const [started, setStarted] = useState(false);

  const startExperience = () => {
    const audio = document.getElementById(
      "experience-background-audio"
    ) as HTMLAudioElement | null;

    if (audio) {
      audio.volume = 0.18;
      void audio.play().catch(() => {});
    }

    setStarted(true);
  };

  return (
    <>
      <ExperienceAudio started={started} />

      {!started ? (
        <Intro onStart={startExperience} />
      ) : (
        <main className="relative bg-[#050403]">
          <ExperienceAtmosphere />
          <ExperienceDepth />
          <ExperienceParticles />
          <CinematicTransitions />
          <StoryScene />
          <ConfidenceScene />
          <GuidanceScene />
          <AladdinScene />
          <TeaScene />
          <SongScene />
          <StayedScene />
          <TeachersDayScene />
        </main>
      )}
    </>
  );
}
