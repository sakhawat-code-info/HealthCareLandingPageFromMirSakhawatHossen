

const FAQ = () => {
    return (
        <div className="my-[160px]">

            <div className=" space-y-8">
                <button className="px-6 py-2 border border-[#343268CC] rounded-full">Faq</button>
                <h3 className="text-4xl font-semibold pb-8">Frequntly Asked Question</h3>
            </div>

            <div className=" grid divide-y divide-neutral-200">
                {/* single item  */}
                <div className="py-3">
                    <details className="group">
                        <summary className="bg-[#FFFFF5CC] px-11 pt-3 pb-8  rounded-t-lg flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="text-xl font-medium">What are your office hours?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 rounded-b-lg">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                </div>
                {/* single item  */}
                <div className="py-3">
                    <details className="group">
                        <summary className="bg-[#FFFFF5CC] px-11 pt-3 pb-8  rounded-t-lg flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="text-xl font-medium">How can I schedule an appointment?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 rounded-b-lg">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                </div>
                {/* single item  */}
                <div className="py-3">
                    <details className="group">
                        <summary className="bg-[#FFFFF5CC] px-11 pt-3 pb-8  rounded-t-lg flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="text-xl font-medium">Do you accept insurance?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 rounded-b-lg">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                </div>
                {/* single item  */}
                <div className="py-3">
                    <details className="group">
                        <summary className="bg-[#FFFFF5CC] px-11 pt-3 pb-8  rounded-t-lg flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="text-xl font-medium">What should I bring to my appointment?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 rounded-b-lg">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                </div>
                {/* single item  */}
                <div className="py-3">
                    <details className="group">
                        <summary className="bg-[#FFFFF5CC] px-11 pt-3 pb-8  rounded-t-lg flex cursor-pointer list-none items-center justify-between font-medium">
                            <span className="text-xl font-medium">Do you offer telemedicine appointments?</span>
                            <span className="transition group-open:rotate-180">
                                <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </summary>
                        <p className="group-open:animate-fadeIn mt-3 text-neutral-600 rounded-b-lg">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.
                        </p>
                    </details>
                </div>







            </div>

        </div>
    );
};

export default FAQ;