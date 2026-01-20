import { MapPin, Clock, Users } from "lucide-react";
import OrangeFlowers from "./assets/Flower_02_Orange.png";
import { Card, CardContent, CardHeader, CardTitle } from "./components/card";

const Venue = () => {
  return (
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
              <h1 className="text-7xl text-wedding-heading mb-4 font-centralwell">The Venue</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-300 to-pink-300"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-wedding-heading font-californian">
                    <MapPin className="w-5 h-5" />
                    Location Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-wedding-text">
                  <h3 className="font-semibold text-lg mb-2">Middle Coombe Farm</h3>
                  <p className="mb-4">Uplowman, Tiverton, Devon, EX16 7QQ</p>
                  <p>Set in its own valley in the breathtaking Devon countryside the estate comprises of a Grade II* listed farmhouse and over 400 acres of private grounds and woodland. Each visitor is personally welcomed by Angela Malyon, whose family has owned Middle Coombe for over 50 years, Middle Coombe Farm is a real slice of West-country paradise, full of atmosphere, energy & character.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-wedding-heading font-californian">
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

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-wedding-heading font-californian">
                  <Users className="w-5 h-5" />
                  Venue Amenities
                </CardTitle>
              </CardHeader>
              <CardContent className="text-wedding-text">
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2">
                    <li>• Bridal suite for getting ready</li>
                    <li>• Groom's preparation room</li>
                    <li>• Professional sound system and DJ</li>
                    <li>• Dance floor and lighting</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• On-site parking</li>
                    <li>• Wheelchair accessible</li>
                    <li>• Catering kitchen facilities</li>
                    <li>• Beautiful photo opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
  );
};

export default Venue;