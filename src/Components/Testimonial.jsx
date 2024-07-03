
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


const Testimonial = () => {
    return (
        <div className='my-[160px]'>
            <div className=" space-y-8">
                <button className="px-6 py-2 border border-[#343268CC] rounded-full">Testimonial</button>
                <h3 className="text-4xl font-semibold pb-12">What they say about us</h3>
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper "
                >



                    <SwiperSlide className='mb-10'>
                        <div className='p-5 bg-[#FFFFF5CC] rounded-2xl'>
                            <div className="mb-3">
                                <span className="font-semibold text-xl">Expertise and Compassion Combined</span>
                                <p className="my-2">I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">Sarah D, </span>
                                            <span className="ml-2  text-xs">IT Professional</span>
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10'>
                        <div className='p-5 bg-[#FFFFF5CC] rounded-2xl'>
                            <div className="mb-3">
                                <span className="font-semibold text-xl">A Partner in Health and
                                    Wellness</span>
                                <p className="my-2">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">David S, </span>
                                            <span className="ml-2  text-xs">Lawyer</span>
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10'>
                        <div className='p-5 bg-[#FFFFF5CC] rounded-2xl'>
                            <div className="mb-3">
                                <span className="font-semibold text-xl">Life-Saving Care, Life-Changing Experience</span>
                                <p className="my-2">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">Michael R, </span>
                                            <span className="ml-2  text-xs">Business Executive</span>
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='mb-10'>
                        <div className='p-5 bg-[#FFFFF5CC] rounded-2xl'>
                            <div className="mb-3">
                                <span className="font-semibold text-xl">Expertise and Compassion Combined</span>
                                <p className="my-2">I can not thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">Sarah D, </span>
                                            <span className="ml-2  text-xs">IT Professional</span>
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='mb-10'>
                        <div className='p-5 bg-[#FFFFF5CC] rounded-2xl'>
                            <div className="mb-3">
                                <span className="font-semibold text-xl">A Partner in Health and
                                    Wellness</span>
                                <p className="my-2">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                            </div>
                            <div className='mt-5'>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="inline-block relative">
                                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://picsum.photos/id/646/200/200" alt="Profile picture" />
                                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <p className="flex items-baseline">
                                            <span className="text-gray-600 font-bold">David S, </span>
                                            <span className="ml-2  text-xs">Lawyer</span>
                                        </p>
                                        <div className="flex items-center mt-1">
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-yellow-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                            <svg className="w-4 h-4 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>
                    </SwiperSlide>







                </Swiper>
            </div>
        </div>






    );
};

export default Testimonial;