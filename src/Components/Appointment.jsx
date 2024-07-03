import { MdArrowOutward } from 'react-icons/md';
import bgImage from '../assets/Rectangle 32.png'
import logo from '../assets/logolight.png'

const Appointment = () => {
    return (
        <div className="my-[160px] rounded-3xl">
            <div className="rounded-3xl  relative font-sans before:absolute before:w-full before:h-full  ">
                <img src={bgImage} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover rounded-3xl " />

                <div className="min-h-[477px] relative z-50 h-full  text-white px-[60px] py-[107px] bg-gradient-to-r from-[#020043]  to-[#0200434D] space-y-10 rounded-3xl">
                    <h2 className="text-4xl font-semibold mb-6 leading-relaxed">
                        Get Your <br />
                        First Appointment <br />
                        at 50% Off!
                    </h2>

                    <div className='flex gap-4'>
                        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-4 bg-[#FFC637]  mb-2 text-[#343268] text-xl border-2 border-[#343268] rounded-xl sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Appointment
                            <MdArrowOutward className="ml-3 size-5 " />
                        </a>
                        <a href="#_" className="inline-flex items-center justify-center w-full px-6 py-4  mb-2 text-white text-xl border-2 border-white rounded-xl sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                            Learn More
                            <MdArrowOutward className="ml-3 size-5 " />
                        </a>
                    </div>

                </div>
                <div className='absolute top-10 right-10 z-50'>
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Appointment;