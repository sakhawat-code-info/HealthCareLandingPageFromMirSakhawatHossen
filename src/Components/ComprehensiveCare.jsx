import { BsCurrencyDollar } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";
import { PiCertificateBold } from "react-icons/pi";

const ComprehensiveCare = () => {
    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-12 gap-2 h-[323px]">
                {/* left side  */}
                <div className="col-span-2 border-2 border-[#02004333] text-[#020043] rounded-xl p-7">
                    <h1 className="text-4xl font-semibold mb-4">90%</h1>
                    <p className="text-sm pr-9">Patient satisfaction rate, reflecting our commitment.</p>
                    <div className="flex items-center justify-center my-5">
                        <GiCartwheel size={120} />
                    </div>
                </div>
                {/* middle  */}
                <div className="col-span-8">
                    <div className="bg-white dark:bg-gray-900">
                        <div className=" dark:text-white">
                            <div className="text-center">
                                <h2 className="font-bold text-5xl my-4">Comprehensive Care for Every Patient</h2>
                            </div>


                            <div className="grid grid-cols-3 mx-auto max-w-xl md:max-w-2xl gap-4 mt-7 text-[#020043]">

                                <div className="p-4 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800">
                                    <div>
                                        <h1 className="text-4xl font-bold">500 +</h1>
                                        <p>Board-certified doctors</p>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <PiCertificateBold size={60} />
                                    </div>
                                </div>

                                <div className="p-4 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800">
                                    <div>
                                        <div className="flex gap-2">
                                            <h1 className="text-4xl font-bold">4.5</h1><FaStar color="yellow" size={40} />
                                        </div>
                                        <p>Over 20,000 Patient</p>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <PiCertificateBold size={60} />
                                    </div>
                                </div>

                                <div className="p-4 border border-[#02004333] flex flex-col rounded-3xl max-w-sm dark:bg-gray-800">
                                    <div>
                                        <div className="flex justify-start items-start">
                                            <BsCurrencyDollar size={36} /> <h1 className="text-4xl font-bold">5000</h1>
                                        </div>
                                        <p>Money spend for poor patient</p>
                                    </div>
                                    <div className="flex items-end justify-end">
                                        <PiCertificateBold size={60} />
                                    </div>
                                </div>





                            </div>
                        </div>
                    </div>
                </div>
                {/* right side  */}
                <div className="col-span-2 border-2 border-[#02004333] text-[#020043] rounded-xl p-7">
                    <h1 className="text-4xl font-semibold mb-4">50+</h1>
                    <p className="text-sm pr-9">Free lession video for patient.</p>
                    <div className="flex items-center justify-center my-5">
                        <GiCartwheel size={120} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComprehensiveCare;