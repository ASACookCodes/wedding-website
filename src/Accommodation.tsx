import MenuButton from "./components/MenuButton";
import OrangeFlowers from "./assets/webp/Flower 08_Pink.webp";

const Accommodation = () => {
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
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-wedding-heading mb-4 font-cormorant-light break-words whitespace-normal mt-16 sm:mt-0">Accommodations</h1>
                            <p className="text-wedding-text mt-5 text-lg">Here are some available accommodations near the venue, ranging from familiar hotels to cozy bed and breakfasts.</p>
                            <p className="text-wedding-text mt-5 text-lg">
                                For a more exhaustive list, please visit <a href="https://www.coombefarmwoods.co.uk/additional-accommodation/" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">coombefarmwoods.co.uk</a>
                            </p>
                        </div>

                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Tiverton Hotel Lounge & Venue</h3>
                            <p className="text-wedding-text mt-2 text-lg">Blundells Rd, Blundell's Rd, Tiverton EX16 4DB</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Website: <a href="https://www.tivertonhotel.co.uk/" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">tivertonhotel.co.uk</a>
                            </p>
                        </div>
                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">The Hartnoll Hotel</h3>
                            <p className="text-wedding-text mt-2 text-lg">Bolham Rd, Tiverton EX16 7RA</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Website: <a href="https://www.hartnollhotel.co.uk/" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">hartnollhotel.co.uk</a>
                            </p>
                        </div>
                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Staple Cross B&B</h3>
                            <p className="text-wedding-text mt-2 text-lg">Staple Cross, Hockworthy, Bampton, TA21 0NH</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Website: <a href="https://www.easybedandbreakfasts.co.uk/Places-to-Stay/accommodation/Staple-Cross-Cottage-Bed-and-Breakfast" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">easybedandbreakfasts.co.uk</a>
                            </p>
                        </div>
                        <div className="relative mb-5">
                            <h3 className="text-xl font-semibold text-wedding-heading mb-2">Brambles B&B</h3>
                            <p className="text-wedding-text mt-2 text-lg">Whitnage Cottage,  Whitnage, Uplowman, Tiverton, Devon, EX16 7DS</p>
                            <p className="text-wedding-text mt-2 text-lg">
                                Website: <a href="https://www.bramblesbedandbreakfast.co.uk/" className="text-wedding-link text-green-600 break-words" target="_blank" rel="noopener noreferrer">bramblesbedandbreakfast.co.uk</a>
                            </p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Accommodation;