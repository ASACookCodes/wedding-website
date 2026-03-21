import { Calendar, MapPin } from "lucide-react";

import Flower01Pink from "./assets/Flower_01_Pink.png";
import Flower02Orange from "./assets/Flower_02_Orange.png";
import Flower03Blue from "./assets/Flower 03_Blue.png";
import Flower04Yellow from "./assets/Flower 04_Yellow.png";
import Flower05White from "./assets/Flower 05_White.png";
import Flower06Blue from "./assets/Flower 06_Blue.png";
import Flower07Orange from "./assets/Flower 07_Orange.png";
import Flower08Pink from "./assets/Flower 08_Pink.png";
import Flower09Yellow from "./assets/Flower 09_Yellow.png";
import Flower10Yellow from "./assets/Flower 10_Yellow.png";
import Flower11Blue from "./assets/Flower 11_Blue.png";
import Flower12Blue from "./assets/Flower 12_Blue.png";
import Flower13Pink from "./assets/Flower 13_Pink.png";
import Flower14Blue from "./assets/Flower 14_Blue.png";
import Flower15Green from "./assets/Flower 15_Green.png";
import Flower16Red from "./assets/Flower 16_Red.png";
import Flower17Pink from "./assets/Flower 17_Pink.png";
import Flower18PinkBlue from "./assets/Flower 18_Pink & Blue.png";

const flowerImages = [
  Flower01Pink,
  Flower02Orange,
  Flower03Blue,
  Flower04Yellow,
  Flower05White,
  Flower06Blue,
  Flower07Orange,
  Flower08Pink,
  Flower09Yellow,
  Flower10Yellow,
  Flower11Blue,
  Flower12Blue,
  Flower13Pink,
  Flower14Blue,
  Flower15Green,
  Flower16Red,
  Flower17Pink,
  Flower18PinkBlue,
];

// Shuffle the array for random order
function shuffleArray<T>(array: T[]): T[] {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
import MenuButton from "./components/MenuButton";

const App = () => {
  // Shuffle on each render for demo; for persistent order, use useMemo
  // Fill the screen with enough flowers, repeating as needed
  const screenFlowerCount = Math.ceil(window.innerWidth / 48); // ~48px per flower, adjust as needed
  const flowersToShow = Array.from({ length: screenFlowerCount }, (_, i) => flowerImages[i % flowerImages.length]);
  const shuffledFlowers = shuffleArray(flowersToShow);
  return (
    <div className="min-h-screen w-full bg-wedding-bg relative">
      <MenuButton />
      <main className="flex-1 relative">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Decorative flower images - fill screen, bunch effect */}
          <div
            className="absolute bottom-0 left-0 w-full flex flex-row items-end z-0"
            style={{ pointerEvents: 'none', gap: 0, justifyContent: 'space-between' }}
          >
            {shuffledFlowers.map((src, i) => {
              // Randomly make some flowers larger for a bunch effect
              const scale = 0.9 + Math.random() * 0.8; // 0.9x to 1.7x
              // Overlap flowers by negative margin, but less so to fill width
              const marginLeft = i === 0 ? 0 : -Math.floor(8 + Math.random() * 10);
              // Randomize zIndex for depth
              const zIndex = 10 + Math.floor(Math.random() * 10);
              return (
                <img
                  key={i}
                  src={src}
                  alt={`Flower ${i+1}`}
                  className="float-animation object-contain"
                  style={{
                    width: `${48 * scale}px`,
                    minWidth: 0,
                    maxWidth: `${90 * scale}px`,
                    height: 'auto',
                    opacity: 0.7 + 0.3 * Math.random(),
                    animationDelay: `${Math.random() * 4}s`,
                    marginLeft,
                    zIndex,
                  }}
                  loading="lazy"
                  width={Math.round(48 * scale)}
                  height={Math.round(70 * scale)}
                />
              );
            })}
          </div>

          {/* Main content */}
          <div className="text-center z-10 px-6 max-w-4xl fade-in-up">
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-wedding-text font-light font-cormorant-light">Together with their families,</p>
              <br />
              <br />
              <h1 className="text-6xl lg:text-9xl mb-4 font-charen">
                Alice & Andrew
              </h1>
              <br />
              <p className="text-xl lg:text-2xl text-wedding-text font-light font-cormorant-light">
                Invite you to celebrate their wedding.
              </p>
            </div>
            <div className="bg-wedding-bg backdrop-blur-sm p-8 mb-8 shadow-lg border" style={{ borderColor: "#4a5954", borderWidth: "1px" }}>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-wedding-heading" />
                  <div>
                    <p className="text-sm text-wedding-text uppercase tracking-wide font-charen">Date</p>
                    <p className="text-xl font-semibold text-wedding-heading font-cormorant-light">September 5th, 2026</p>
                  </div>
                </div>
                <div className="hidden lg:block w-px h-12 bg-wedding-heading/20"></div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-wedding-heading" />
                  <div>
                    <p className="text-sm text-wedding-text uppercase tracking-wide font-charen">Location</p>
                    <p className="text-xl font-semibold text-wedding-heading font-cormorant-light">Middle Coombe Farm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation moved to sidebar */}
          </div>
        </div>

        {/* Additional decorative elements for bottom */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-24 h-24 opacity-30">
            <img
              src="/lovable-uploads/0c338c58-8fb3-48f0-a8bc-84d4869300f7.png"
              alt="Pink carnations"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-10 right-1/3 w-20 h-20 opacity-40">
            <img
              src="/lovable-uploads/ac620b56-1061-4b49-8e1a-3ceda02f27b6.png"
              alt="Blue bellflowers"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
