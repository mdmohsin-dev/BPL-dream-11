import logo from "../assets/images/logo.png"
import coinLogo from "../assets/images/dollar.png"
const Navbar = ({ coin }) => {


    return (

        <div className="drawer text-black">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

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
                        <ul className="flex gap-9">
                            <li className="text-[16px]"><a href="">Home</a></li>
                            <li className="text-[16px]"><a href="">Fixture</a></li>
                            <li className="text-[16px]"><a href="">Teams</a></li>
                            <li className="text-[16px]"><a href="">Schedules</a></li>
                        </ul>
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