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

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />;
  }

  return (
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
  );
}
