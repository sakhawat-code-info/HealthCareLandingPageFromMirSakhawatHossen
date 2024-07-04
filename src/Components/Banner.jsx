import bannerImg from '../assets/Rectangle 5.png'


const Banner = () => {
    return (
        <div className="my-10 ">
            <div className="min-h-[470px]">
                <img src={bannerImg} alt="Banner Image" className=" w-full h-full min-h-[470px]" />
            </div>
        </div>
    );
};

export default Banner;