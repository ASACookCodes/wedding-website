import MenuButton from "./components/MenuButton";
import OrangeFlowers from "./assets/webp/Flower 16_Red.webp";

const Faq = () => {
 return (
    <div className="min-h-screen flex w-full bg-wedding-bg">
      <MenuButton />
      <div className="min-h-screen flex w-full bg-wedding-bg fade-in-up">
        <main className="flex-1 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className=" mb-12">
              <div className="absolute -top-1 -right-1 w-35 h-35 opacity-40 float-animation sm:w-75 sm:h-75">
                <img
                  src={OrangeFlowers}
                  alt="Orange flowers"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wedding-heading mb-4 font-cormorant-light break-words whitespace-normal mt-16 sm:mt-0">FAQ</h1>
              <p className="text-wedding-text mt-5 text-lg">Below are answers to some questions that you may have about the day. If you have a question that you can't find the answer to here, please get in contact.</p>
            </div>

            <div className="relative mb-5">
              <h3 className="text-xl font-semibold text-wedding-heading mb-2">What is the dress code?</h3>
              <p>The dress code for the day is formal. Suits and ties for gentlemen, and elegant dresses for ladies are recommended. The ceremony will be held in an outdoor woodland setting, so please choose footwear suitable for natural terrain for the ceremony. There will be opportunities to change shoes afterwards.</p>
              <br />
              <h3 className="text-xl font-semibold text-wedding-heading mb-2">What is the RSVP deadline?</h3>
              <p>Please return the card enclosed in your invitation by the <b>31st of May</b>.</p>
              <br />
                <h3 className="text-xl font-semibold text-wedding-heading mb-2">Are children allowed?</h3>
                <p>Sadly we will not be able to accommodate children at the wedding.</p>
                <br />
                <h3 className="text-xl font-semibold text-wedding-heading mb-2">Is there parking available?</h3>
                <p>There is limited parking available at the venue, so we encourage carpooling or using alternative transportation if possible.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Faq;