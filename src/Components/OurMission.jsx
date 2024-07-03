

const OurMission = () => {
    return (
        <div className="container mx-auto my-10 border-2 border-red-500">
            <div className="grid md:grid-cols-2 items-center md:gap-4 gap-8 font-[sans-serif] text-[#333] max-w-5xl max-md:max-w-md mx-auto">
                <div className="max-md:order-1 max-md:text-center">

                    <h3 className="md:text-3xl text-2xl md:leading-10">We help to get soultions.</h3>
                    <p className="mt-4 text-sm">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                    <button type="button" className="px-6 py-2 mt-8 font-semibold rounded text-sm outline-none border-2 border-[#333] hover:bg-[#333] hover:text-white transition-all duration-300">Explore</button>
                </div>
                <div className="md:h-[415px]">
                    <img src="https://readymadeui.com/photo.webp" className="w-full h-full md:object-contain" />
                </div>
            </div>
        </div>
    );
};

export default OurMission;