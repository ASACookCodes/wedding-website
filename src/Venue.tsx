import { MapPin, Clock, Users } from "lucide-react";
import OrangeFlowers from "./assets/Flower_02_Orange.png";
import { Card, CardContent, CardHeader, CardTitle } from "./components/card";
import MenuButton from "./components/MenuButton";

const Venue = () => {
  return (
    <div className="min-h-screen flex w-full bg-wedding-bg">
      <MenuButton />
      <div className="min-h-screen flex w-full bg-wedding-bg fade-in-up">
        <main className="flex-1 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute -top-4 -right-4 w-30 h-30 opacity-80 float-animation">
                <img
                  src={OrangeFlowers}
                  alt="Orange flowers"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-7xl text-wedding-heading mb-4 font-cormorant-light">The Venue</h1>
            </div>

            <div className="grid md:grid-rows-2 gap-8 text-center">
              <Card className="flex flex-col items-center justify-center max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-wedding-heading font-californian justify-center">
                    <MapPin className="w-5 h-5" />
                    Location Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-wedding-text">
                  <h3 className="font-semibold text-lg mb-2">Middle Coombe Farm</h3>
                  <p className="mb-4">Uplowman, Tiverton, Devon, EX16 7QQ</p>
                </CardContent>
              </Card>

              <Card className="flex flex-col items-center justify-center max-w-sm mx-auto">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-wedding-heading font-californian justify-center">
                    <Clock className="w-5 h-5" />
                    Ceremony & Reception
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-wedding-text">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold">Ceremony</p>
                      <p>1:00 PM in the Woodland Getaway</p>
                    </div>
                    <div>
                      <p className="font-semibold">Wedding Breakfast</p>
                      <p>3:00 PM in the Cider Barn</p>
                    </div>
                    <div>
                      <p className="font-semibold">First Dance</p>
                      <p>6:00 PM on the Dancefloor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Venue;