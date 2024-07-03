import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import icon1 from '../assets/Icons.png'
import group7 from '../assets/Group 7.png'
import group from '../assets/Group.png'
import group12 from '../assets/Group 12.png'
import camera from '../assets/camera.png'

const ComprehensiveCare = () => {
    return (
        <div className="container mx-auto my-10 ">
            <div className="grid grid-cols-12 justify-end items-end min-h-[323px] gap-5">
                {/* left side  */}
                <div className="col-span-2 border-2 border-[#02004333] text-[#020043] rounded-xl p-5 ">
                    <h1 className="text-4xl font-semibold mb-2">90%</h1>
                    <p className="text-sm pr-4 mb-6">Patient satisfaction rate, reflecting our commitment.</p>
                    <div className="flex items-center justify-center">
                        <img src={group12} alt="" />
                    </div>
                </div>
                {/* middle  */}
                <div className="col-span-8 ">
                    <div className="bg-white dark:bg-gray-900">
                        <div className=" dark:text-white">
                            <div className="text-center px-10">
                                <h2 className="font-bold text-5xl">Comprehensive Care for Every Patient</h2>
                            </div>


                            <div className="grid grid-cols-3 items-end justify-end gap-5 mt-2 text-[#020043] min-h-[190px]">

                                <div className="p-5 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800 bg-[#FFFFF5]">
                                    <div className="pr-[90px]">
                                        <h1 className="text-[40px] font-bold">500+</h1>
                                        <p>Board-certified doctors</p>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <img src={icon1} alt="" />
                                    </div>
                                </div>

                                <div className="h-[162px] p-5 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800">
                                    <div className="space-y-4">
                                        <div className="flex gap-2">
                                            <h1 className="text-4xl font-bold">4.5</h1><FaStar color="yellow" size={40} />
                                        </div>
                                        <p>Over 20,000 Patient</p>
                                        <img src={group7} alt="" />
                                    </div>
                                </div>

                                <div className="p-5 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800 bg-[#FFFFF5]">
                                    <div className="pr-[90px]">
                                        <div className="flex justify-start items-start">
                                            <BsCurrencyDollar size={36} /> <h1 className="text-4xl font-bold">5000</h1>
                                        </div>
                                        <p>Money spend for poor patient</p>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <img src={group} alt="" />
                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className="col-span-2 border-2 border-[#02004333] text-[#020043] rounded-xl p-5 ">
                    <h1 className="text-4xl font-semibold mb-2">50+</h1>
                    <p className="text-sm pr-10 mb-6">Free lession video for patient.</p>
                    <div className="flex items-center justify-center">
                        <img src={camera} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCare;