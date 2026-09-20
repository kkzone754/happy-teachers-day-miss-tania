"use client";

import { useState } from "react";
import Intro from "./components/Intro";
import StoryScene from "./components/StoryScene";
import ConfidenceScene from "./components/ConfidenceScene";
import GuidanceScene from "./components/GuidanceScene";
import AladdinScene from "./components/AladdinScene";
import TeaScene from "./components/TeaScene";
import ExperienceAtmosphere from "./components/ExperienceAtmosphere";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />;
  }

  return (
    <main className="relative bg-[#050403]">
      <ExperienceAtmosphere />
      <StoryScene />
      <ConfidenceScene />
      <GuidanceScene />
      <AladdinScene />
      <TeaScene />
    </main>
  );
}
