import logo from "../assets/images/logo.png"
import coinLogo from "../assets/images/dollar.png"
import { useState } from "react";



const Navbar = ({ coin }) => {

    const [isOpen, setIsOpen] = useState(true)

    return (
        // <div className="navbar text-black">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg onClick={() => setIsOpen(!isOpen)}
        //                     xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //             </div>
        //             <ul
        //                 tabIndex="-1"
        //                 className='menu menu-sm dropdown-content bg-[#CBDF27] rounded-box mt-3 fixed left-0 top-16 w-72 z-50 transform transition-transform duration-300 ease-in-out  h-screen p-2 shadow '>
        //                 
        //             </ul>
        //         </div>
        //         {/* <div>
        //             <div className="lg:hidden">
        //                 <svg onClick={() => setIsOpen(!isOpen)}
        //                     xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //             </div>
        //             <div className={`menu menu-sm dropdown-content bg-[#CBDF27] rounded-box  mt-3 fixed left-0 top-16 w-72 z-50 transform transition-transform duration-00 ease-in-out  h-screen p-2 shadow ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>

        //             </div>
        //         </div> */}
        //         <div>
        //             <img src={logo} alt="" />
        //         </div>
        //     </div>
        //     <div className="navbar-end ">
        //         <div className="hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1 flex gap-5">
        //                 <li className="text-[16px]"><a>Home</a></li>
        //                 <li className="text-[16px]"><a>Fixture</a></li>
        //                 <li className="text-[16px]"><a>Teams</a></li>
        //                 <li className="text-[16px]"><a>Schedules</a></li>
        //             </ul>
        //         </div>
        //         
        //     </div>

        // </div>
        <div className="drawer text-black">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar w-full">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>

                    <div className="navbar-start">
                        <img src={logo} alt="" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <h1>Mohsin</h1>
                    </div>

                    <div className="navbar-end">
                        <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-lg ml-5 font-semibold">{coin}  <img src={coinLogo} alt="" /></div>
                    </div>


                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-[#CBDF27] min-h-full w-70 p-4">
                    <li className="text-[16px]"><a>Home</a></li>
                    <li className="text-[16px]"><a>Fixture</a></li>
                    <li className="text-[16px]"><a>Teams</a></li>
                    <li className="text-[16px]"><a>Schedules</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;