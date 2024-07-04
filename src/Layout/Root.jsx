
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <div>
            <div className=" max-w-[1161px] lg:w-[90%] w-[98%] mx-auto font-inter">
                <Navbar />

                <div className="min-h-[calc(100vh-520.667px)]">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Root;