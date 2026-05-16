import MenuButton from "./components/MenuButton";
import OrangeFlowers from "./assets/webp/Flower 08_Pink.webp";

const Transport = () => {
    return (
        <div className="min-h-screen flex w-full bg-wedding-bg">
            <MenuButton />
            <div className="min-h-screen flex w-full bg-wedding-bg fade-in-up">
                <main className="flex-1 p-6 lg:p-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <div className="absolute -top-1 -right-4 w-35 h-35 opacity-40 float-animation sm:w-75 sm:h-75">
                                <img
                                    src={OrangeFlowers}
                                    alt="Orange flowers"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wedding-heading mb-4 font-cormorant-light break-words whitespace-normal mt-16 sm:mt-0">Transport</h1>
                            <p className="text-wedding-text mt-5 text-lg">Here are some available transport options to and from the venue.</p>
                            <p className="text-wedding-text mt-5 text-lg">
                                For a more exhaustive list, please visit <a href="https://www.coombefarmwoods.co.uk/licensed-devon-wedding-venue/additional-wedding-services/" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">coombefarmwoods.co.uk</a>
                            </p>
                        </div>

                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Clints Taxi</h3>
                            <p className="text-wedding-text mt-2 text-lg">24 hour service. Private hire. Airport transfers</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Tel: <a href="tel:+447934993450" className="text-wedding-link text-green-600 break-words">+44 7934 993450</a>
                            </p>
                        </div>
                         <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Liz Cabs</h3>
                            <p className="text-wedding-text mt-2 text-lg">Great for 4 and 8 seater vehicles. Inform them you are going to Middle Coombe for a potential deal.</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Tel: <a href="tel:+447899903314" className="text-wedding-link text-green-600 break-words">+44 7899 903314</a>
                            </p>
                        </div>
                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Parkways Cabs</h3>
                            <p className="text-wedding-text mt-2 text-lg">
                                Tel: <a href="tel:+44188438899" className="text-wedding-link text-green-600 break-words">+44 1884 38899 </a>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Transport;