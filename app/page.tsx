"use client";

import { useState } from "react";
import Intro from "./components/Intro";
import StoryScene from "./components/StoryScene";
import ConfidenceScene from "./components/ConfidenceScene";
import GuidanceScene from "./components/GuidanceScene";
import AladdinScene from "./components/AladdinScene";

export default function Home() {
  const [started, setStarted] = useState(false);

  if (!started) {
    return <Intro onStart={() => setStarted(true)} />;
  }

  return (
    <main>
      <StoryScene />
<ConfidenceScene />
<GuidanceScene />
<AladdinScene />
    </main>
  );
}