/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Challenge from "./components/Challenge";
import SocialProof from "./components/SocialProof";
import Journey from "./components/Journey";
import FooterCTA from "./components/FooterCTA";
import WaveBackground from "./components/WaveBackground";
import WaterCursor from "./components/WaterCursor";
import AudioPlayer from "./components/AudioPlayer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] selection:bg-[var(--color-primary)] selection:text-white cursor-none">
      {/* Immersive Background Layers */}
      <WaveBackground />
      
      {/* Interactive Elements */}
      <WaterCursor />
      <AudioPlayer />
      <Nav />
      
      {/* Main Content Sections */}
      <main className="relative z-10 w-full overflow-hidden">
        <Hero />
        <Manifesto />
        <SocialProof />
        <Challenge />
        <Journey />
        <FooterCTA />
      </main>
    </div>
  );
}

