import { MdArrowOutward } from 'react-icons/md';
import TechImg from '../assets/Rectangle 27-2.png'
import Rectangle from '../assets/Rectangle 27-1.png'
import HappyDoctor from '../assets/Rectangle 27.png'

const Service = () => {
    return (
        <div className="container mx-auto my-40 bg-[#FFFFF5CC] p-10 rounded-3xl shadow shadow-[#00000040]">
            <div className="grid md:grid-cols-2 justify-between md:gap-4 gap-8 text-[#333] max-md:max-w-md">

                <div className="max-w-[470px] space-y-8">
                    <button className="px-6 py-2 border border-[#343268CC] bg-[#FFFFF5] rounded-full">Service</button>
                    <h3 className="text-4xl font-semibold pr-24">Empowering Health, Enriching Lives</h3>
                    <p className="mt-4 text-sm">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                    <a href="#_" className="inline-flex items-center justify-center w-full px-7 py-3  mt-6  text-sm bg-[#FFC637] rounded-md  sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                        Appointment
                        <MdArrowOutward className="ml-3 size-5" />
                    </a>
                </div>

                <div className="md:h-[394px] relative flex justify-self-end rounded-3xl">
                    <img src={TechImg} className="w-full h-full md:object-contain rounded-3xl" />

                    <div className='w-[321px] rounded-2xl bg-[#343268CC] absolute left-6 bottom-6 px-4 py-4 text-white flex justify-end items-end'>
                        <div className=''>
                            <h3 className='mb-4 text-xl'>Advanced Technology</h3>
                            <p className='text-sm font-xs pr-7 mb-7'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                        <div className='bg-[#FFC637] rounded-full p-2'>
                            <MdArrowOutward size={20} />
                        </div>
                    </div>

                </div>

                <div className="md:h-[394px] relative flex justify-self-end rounded-3xl">
                    <img src={Rectangle} className="w-full h-full md:object-contain rounded-3xl" />

                    <div className='w-[321px] rounded-2xl bg-[#343268CC] absolute left-6 bottom-6 px-4 py-4 text-white flex justify-end items-end'>
                        <div className=''>
                            <h3 className='mb-4 text-xl'>Online Doctor Meet</h3>
                            <p className='text-sm font-xs pr-7 mb-7'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                        <div className='bg-[#FFC637] rounded-full p-2'>
                            <MdArrowOutward size={20} />
                        </div>
                    </div>

                </div>

                <div className="md:h-[394px] relative flex justify-self-end rounded-3xl">
                    <img src={HappyDoctor} className="w-full h-full md:object-contain rounded-3xl" />

                    <div className='w-[321px] rounded-2xl bg-[#343268CC] absolute left-6 bottom-6 px-4 py-4 text-white flex justify-end items-end'>
                        <div className=''>
                            <h3 className='mb-4 text-xl'>Consultancy your health</h3>
                            <p className='text-sm font-xs pr-7 mb-7'>Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision.</p>
                        </div>
                        <div className='bg-[#FFC637] rounded-full p-2'>
                            <MdArrowOutward size={20} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;