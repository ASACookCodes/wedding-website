import MenuButton from "./components/MenuButton";
import OrangeFlowers from "./assets/Flower_02_Orange.png";

const Gifts = () => {
 return (
    <div className="min-h-screen flex w-full bg-wedding-bg">
      <MenuButton />
      <div className="min-h-screen flex w-full bg-wedding-bg fade-in-up">
        <main className="flex-1 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-12">
              <div className="absolute -top-4 -right-4 w-35 h-35 opacity-40 float-animation">
                <img
                  src={OrangeFlowers}
                  alt="Orange flowers"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-7xl font-bold text-wedding-heading mb-4 font-cormorant-light">Gifts</h1>
              <p className="text-wedding-text mt-5 text-lg">Your presence at our wedding is the greatest gift of all. However, if you wish to contribute to our honeymoon, you can buy a cash voucher.</p>
              <p className="text-wedding-text mt-5 text-lg">Please use the link below or scan the QR code. We are so grateful for your generosity and support as we start this new chapter together.</p>
              <div className="mt-6 flex items-center justify-center gap-6">
            <a
                href="https://prezola.com/buy/view/322755"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-yellow-100 text-wedding-heading font-semibold rounded hover:bg-yellow-200 transition-colors"
            >
                Contribute to our honeymoon fund
            </a>
              </div>
              <div className="mt-6 flex items-center justify-center gap-6">
                <img src={"./src/assets/prezola-gift-list-qr.png"} alt="QR code for honeymoon fund" className="w-48 h-48 object-contain" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Gifts;