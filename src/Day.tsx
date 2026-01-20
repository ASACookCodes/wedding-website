import { Clock, Camera, Music, Utensils } from "lucide-react";
import BlueLavender from "./assets/Flower 12_Blue.png";
import BlueFlowers from "./assets/Flower 03_Blue.png";
import { Card, CardContent} from "./components/card";

const Day = () => {
  const timeline = [
    {
      time: "12:30 PM",
      event: "Arrival Time",
      description: "Please arrive by this time to ensure you are seated before the ceremony begins. The ceremony will be held in the woods a short walk from the venue. Accessible transport will be available if needed.",
      icon: Camera
    },
    {
      time: "1:00 PM",
      event: "Ceremony Begins",
      description: "We welcome you to join us in the woods for the celebration of our special day",
      icon: Camera
    },
    {
      time: "3:00 PM",
      event: "Wedding Breakfast",
      description: "A three course meal will be served in the barn following the ceremony.",
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
                  src={BlueLavender} 
                  alt="Blue lavender"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-7xl font-bold text-wedding-heading mb-4 font-centralwell">The Day</h1>
              <p className="text-wedding-text mt-5 text-lg">Below are the timings and important information about what to expect on the day.</p>
            </div>

            <div className="relative mb-5">
              <h3 className="text-xl font-semibold text-wedding-heading mb-2">Important Notes</h3>
              <ul className="text-wedding-text space-y-1">
                <li>• Please arrive before <b>12:30 PM</b> to allow enough time to make your way to the ceremony location.</li>
                <li>• Outdoor woodland ceremony - please choose footwear suitable for natural terrain.</li>
                <li>• Dancing and celebration until midnight</li>
                <li>• <b>Card facilities are limited. Please bring enough cash for the evening.</b></li>
              </ul>
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
                          <h2 className="text-2xl font-semibold text-wedding-heading font-californian">{item.event}</h2>
                        </div>
                        <p className="text-wedding-text">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
  );
};

export default Day;