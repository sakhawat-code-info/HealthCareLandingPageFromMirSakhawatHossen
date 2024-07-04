
import logoDark from "../assets/logodark.png"
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    {/* for mobile version  */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Services</a></li>
                        <li><a>Blog</a></li>
                        <li><a>About us</a></li>
                    </ul>
                </div>

                {/* logo  */}
                <a className="btn btn-ghost text-xl">
                    <img src={logoDark} className="" alt="" />
                </a>
            </div>

            {/* for large screen  */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#343268] text-base">
                    <li><a>Home</a></li>
                    <li><a>Services</a></li>
                    <li><a>Blog</a></li>
                    <li><a>About us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="#_" className="inline-flex items-center justify-center w-full px-7 py-3  mb-2 text-[#343268] text-sm border-2 border-[#343268] rounded-md  sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
                    Appointment
                    <MdArrowOutward className="ml-3 size-5" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;