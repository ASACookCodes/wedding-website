import { Calendar, MapPin, Heart } from "lucide-react";
import { Link } from "react-router-dom";
const App = () => {
  return (

      <div className="min-h-screen flex w-full bg-wedding-bg">
      
        <main className="flex-1 relative">    
          {/* Hero Section */}
          <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Decorative flower images */}
            <div className="absolute top-10 left-10 w-48 h-48 opacity-60 float-animation">
              <img 
                src="/src/assets/Flower 08_Pink.png" 
                alt="Pink watercolor flowers"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute top-20 right-16 w-60 h-60 opacity-50 float-animation" style={{animationDelay: '2s'}}>
              <img 
              src="/src/assets/Flower 12_Blue.png" 
              alt="Mixed watercolor flowers"
              className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-20 left-20 w-54 h-54 opacity-40 float-animation" style={{animationDelay: '4s'}}>
              <img 
              src="/src/assets/Flower 13_Pink.png" 
              alt="Pink lily flowers"
              className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute bottom-20 right-20 w-52 h-52 opacity-50 float-animation" style={{animationDelay: '1s'}}>
              <img 
              src="/src/assets/Flower 18_Pink & Blue.png"
              alt="Blue watercolor flowers"
              className="w-full h-full object-contain"
              />
            </div>

            {/* Main content */}
            <div className="text-center z-10 px-6 max-w-4xl fade-in-up">
              <div className="mb-8">
                <Heart className="w-12 h-12 text-pink-400 mx-auto mb-9 animate-pulse" />
                <h1 className="text-6xl lg:text-9xl mb-4 font-centralwell">
                  Alice & Andrew
                </h1>
                <div className="w-32 h-1 bg-gradient-to-r from-pink-300 to-green-300 mx-auto mb-6"></div>
                <p className="text-xl lg:text-2xl text-wedding-text font-light">
                  Together with our families, we invite you to celebrate our wedding
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-wedding-heading" />
                    <div>
                      <p className="text-sm text-wedding-text uppercase tracking-wide">Date</p>
                      <p className="text-xl font-semibold text-wedding-heading">September 5th, 2026</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-px h-12 bg-wedding-heading/20"></div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-wedding-heading" />
                    <div>
                      <p className="text-sm text-wedding-text uppercase tracking-wide">Location</p>
                      <p className="text-xl font-semibold text-wedding-heading">Middle Coombe Farm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row sm:flex-row gap-4 justify-center mb-4">
                  <Link to="/venue">The Venue</Link>
                  <Link to="/day">The Day</Link>
              </div>
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
