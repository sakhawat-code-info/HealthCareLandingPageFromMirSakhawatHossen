

const Banner = () => {
    return (
        <div className="my-3">
            <div className="relative min-h-[350px] font-sans before:absolute before:w-full before:h-full rounded-[48px] before:bg-black before:opacity-20 before:z-10">
                <img src="https://as1.ftcdn.net/v2/jpg/05/36/50/46/1000_F_536504656_tN0AhiSzG4AiMoBVYIvFAPqqzvoGhM5m.jpg" alt="Banner Image" className="absolute inset-0 w-full h-full rounded-xl" />
            </div>
        </div>
    );
};

export default Banner;