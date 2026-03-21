import { Clock, Camera, Music, Utensils } from "lucide-react";
import BlueLavender from "./assets/Flower 12_Blue.png";
import { Card, CardContent } from "./components/card";
import MenuButton from "./components/MenuButton";

const Day = () => {

  const timeline = [
    {
      time: "12:30 PM",
      event: "Arrival Time",
      description: "Please arrive by this time to ensure you are seated before the ceremony begins. The ceremony will be held in the woods a short walk from the venue. Accessible transport will be available if needed.",
    },
    {
      time: "1:00 PM",
      event: "Ceremony Begins",
      description: "We welcome you to join us in the woods for the celebration of our special day",
    },
    {
      time: "1:30 PM",
      event: "Drinks Reception",
      description: "Please enjoy a glass of fizz, confetti photo opportunities, and get some photos to remember!",
    },
    {
      time: "2:30 PM",
      event: "Canapes and Games",
      description: "Enjoy some delicious canapes and fun lawn games on the lovely venue grounds while we take some more photos.",
    },
    {
      time: "4:00 PM",
      event: "Wedding Breakfast & Speeches",
      description: "Enjoy a delicious three-course meal in the barn following the ceremony, followed by speeches from our loved ones.",
    },
    {
      time: "7:00 PM",
      event: "Evening Celebration",
      description: "Join us for an evening of dancing and celebration as we continue the festivities in the barn.",
    },
    {
      time: "00:00 AM",
      event: "Carriages",
      description: "We draw a close to the celebration and say goodbye to our valued guests.",
    }
  ];

  return (
    <div className="min-h-screen flex w-full bg-wedding-bg">
      <MenuButton />
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
              <h1 className="text-7xl text-wedding-heading mb-4 font-cormorant-light">The Day</h1>
              <p className="text-wedding-text mt-5 text-lg">Below are the various timings and important information about what to expect on the day of the wedding.</p>
            </div>

            <div className="relative mb-5">
              <h3 className="text-xl font-semibold text-wedding-heading mb-2">Important Notes</h3>
              <ul className="text-wedding-text space-y-1">
                <li>• Please arrive <b>before 12:30 PM</b> to allow enough time to make your way to the ceremony location.</li>
                <li>• Ours is an <b>outdoor woodland ceremony</b> - please choose footwear suitable for natural terrain.</li>
                <li>• Card facilities are limited. Please bring enough cash for the evening.</li>
              </ul>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <Card key={index} className="backdrop-blur-sm transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
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
    </div>
  );
};

export default Day;