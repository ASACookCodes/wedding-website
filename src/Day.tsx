import { Clock, Camera, Music, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./components/card";

const Day = () => {
  const timeline = [
    {
      time: "2:00 PM",
      event: "Bridal Party Preparations",
      description: "Getting ready with hair, makeup, and photos",
      icon: Camera
    },
    {
      time: "4:00 PM",
      event: "Wedding Ceremony",
      description: "Join us in the Rose Garden for our vows",
      icon: Clock
    },
    {
      time: "5:00 PM",
      event: "Cocktail Hour",
      description: "Drinks and appetizers on the Terrace",
      icon: Utensils
    },
    {
      time: "6:30 PM",
      event: "Reception Begins",
      description: "Dinner, toasts, and celebration",
      icon: Music
    },
    {
      time: "8:00 PM",
      event: "First Dance",
      description: "Our special moment on the dance floor",
      icon: Music
    },
    {
      time: "11:00 PM",
      event: "Last Dance",
      description: "The celebration continues until late",
      icon: Music
    }
  ];

  return (
      <div className="min-h-screen flex w-full bg-wedding-bg fade-in-up">
        <main className="flex-1 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute -top-4 -right-4 w-35 h-35 opacity-40 float-animation">
                <img 
                  src="/src/assets/Flower 12_Blue.png" 
                  alt="Blue lavender"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-7xl font-bold text-wedding-heading mb-4 font-centralwell">The Day</h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              <p className="text-wedding-text mt-4 text-lg">Here's what to expect on our special day</p>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="backdrop-blur-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-wedding-heading/10 rounded-full flex items-center justify-center">
                          <item.icon className="w-6 h-6 text-wedding-heading" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <span className="text-2xl font-semibold text-wedding-heading">{item.time}</span>
                          <span className="hidden sm:block text-wedding-text">•</span>
                          <h3 className="text-xl font-semibold text-wedding-heading">{item.event}</h3>
                        </div>
                        <p className="text-wedding-text">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="backdrop-blur-sm inline-block">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-20 h-20 opacity-40">
                      <img 
                        src="/lovable-uploads/f4c9e27d-c37d-4a18-8199-19ad1dcefba2.png" 
                        alt="Blue flowers"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-wedding-heading mb-2">Important Notes</h3>
                    <ul className="text-wedding-text space-y-1">
                      <li>• Ceremony will be outdoors (weather permitting)</li>
                      <li>• Cocktail hour includes open bar</li>
                      <li>• Dinner will be a plated three-course meal</li>
                      <li>• Dancing and celebration until midnight</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
  );
};

export default Day;