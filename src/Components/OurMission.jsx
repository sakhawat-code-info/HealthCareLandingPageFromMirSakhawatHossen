import { MdArrowOutward } from 'react-icons/md';
import missionImg from '../assets/Rectangle 24.png'

const OurMission = () => {
    return (
        <div className="container mx-auto my-40 ">
            <div className="grid md:grid-cols-2 justify-between md:gap-4 gap-8 text-[#333] max-md:max-w-md">

                <div className="max-w-[470px] space-y-8">
                    <button className="px-6 py-2 border border-[#343268CC] bg-[#FFFFF5] rounded-full">Who we are</button>
                    <h3 className="text-4xl font-semibold pr-24">We Help To Get Soultions.</h3>
                    <p className="mt-4 text-sm">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                    <a href="#_" className="inline-flex items-center justify-center w-full p-2  mt-2  text-sm bg-[#FFC637] rounded-md  sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Learn more
                        <MdArrowOutward className="ml-3 size-5" />
                    </a>
                </div>

                <div className="md:h-[415px] relative flex justify-self-end">
                    <img src={missionImg} className="w-full h-full md:object-contain pb-10" />

                    <div className='w-[395px] rounded-[32px] bg-[#343268] absolute -left-20 bottom-0 px-8 py-12 text-white'>
                        <h3 className='mb-5 text-2xl'>Our mission is simple</h3>
                        <p>To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default OurMission;