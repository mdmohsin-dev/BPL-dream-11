import logo from "../assets/images/logo.png"
import coinLogo from "../assets/images/dollar.png"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-end ">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-[16px]"><a>Home</a></li>
                        <li className="text-[16px]"><a>Fixture</a></li>
                        <li className="text-[16px]"><a>Teams</a></li>
                        <li className="text-[16px]"><a>Schedules</a></li>
                    </ul>
                </div>
                <button className="btn">0 coin <img src={coinLogo} alt="" /></button>
            </div>

        </div>
    );
};

export default Navbar;