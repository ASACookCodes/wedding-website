import { Calendar, MapPin } from "lucide-react";
import PinkFlower from "./assets/Flower 08_Pink.png"
import MixedWaterColourFlowers from "./assets/Flower 12_Blue.png"
import PinkLilyFlowers from "./assets/Flower 13_Pink.png"
import BlueWatercolourFlowers from "./assets/Flower 18_Pink & Blue.png"
import FlowerLargeOrange from "./assets/Flower_02_Orange.png"
import FlowerWhite from "./assets/Flower 05_White.png"
import FlowerBlue from "./assets/Flower 03_Blue.png"
import FlowerGreen from "./assets/Flower 15_Green.png"
import Sidebar from "./components/sidebar";
const App = () => {
  return (

    <div className="min-h-screen flex w-full bg-wedding-bg">
      <Sidebar />
      <main className="flex-1 relative">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Decorative flower images */}
          <div className="absolute bottom-20 w-122 h-122 opacity-50 float-animation" style={{ animationDelay: '1s', bottom: "-4vh", left: "-5vw" }}>
            <img
              src={FlowerLargeOrange}
              alt="Orange flowers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-20 w-122 h-122 opacity-50 float-animation" style={{ animationDelay: '1s', bottom: "-10vh", left: "0vw" }}>
            <img
              src={FlowerWhite}
              alt="White flowers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute" style={{ bottom: "-2vh", left: "15vw" }}>
            <img
              src={PinkFlower}
              alt="Pink watercolor flowers"
              className="w-68 h-68 opacity-60 float-animation object-contain"
            />
          </div>
          <div className="absolute" style={{ bottom: "-20vh", left: "16vw" }}>
            <img
              src={FlowerBlue}
              alt="Blue watercolor flowers"
              className="w-108 h-108 opacity-60 float-animation object-contain"
            />
          </div>
          <div className="absolute" style={{ bottom: "-20vh", left: "20vw" }}>
            <img
              src={FlowerGreen}
              alt="Green watercolor flowers"
              className="w-108 h-108 opacity-60 float-animation object-contain"
            />
          </div>
          <div className="absolute right-16 w-80 h-80 opacity-50 float-animation" style={{ animationDelay: '2s', bottom: "-2vh" }}>
            <img
              src={MixedWaterColourFlowers}
              alt="Mixed watercolor flowers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute left-40 w-84 h-84 opacity-40 float-animation" style={{ animationDelay: '4s', bottom: "-2vh" }}>
            <img
              src={PinkLilyFlowers}
              alt="Pink lily flowers"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute bottom-20 w-122 h-122 opacity-50 float-animation" style={{ animationDelay: '1s', bottom: "-2vh", right: "-8vw" }}>
            <img
              src={BlueWatercolourFlowers}
              alt="Blue watercolor flowers"
              className="w-full h-full object-contain"
            />
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
