import footerLogo from "../assets/images/logo-footer.png"

const Footer = () => {
    return (
        <div className="bg-[#06091A] mt-28">
            <div className="max-w-330 w-full mx-auto px-4 md:px-6 xl:px-0 md:pt-12 pt-8">
                <img className="flex justify-self-center" src={footerLogo} alt="" />
                <div className="flex flex-col lg:flex-row gap-9 justify-between items-start pt-14">
                    <div className="lg:w-1/4">
                        <h3 className="text-xl font-semibold">About us</h3>
                        <p className=" pt-4 text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Quick links</h3>
                        <ul className="pt-4">
                            <li className="text-gray-400"><a href="">Home</a></li>
                            <li className="pt-2 text-gray-400"><a href=""></a>Service</li>
                            <li className="py-2 text-gray-400"><a href=""></a>About</li>
                            <li className="text-gray-400"><a href=""></a>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">Subscribe</h3>
                        <div className="pt-4">
                            <p className="text-gray-500">Subscribe to our newsletter for the <br /> latest updates.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider md:pt-16 pt-7"></div>

            <p className="text-center md:py-8 py-4 text-sm px-1">&copy; {new Date().getFullYear()} Dream 11 Cricket Team All Rights Reserved.</p>

        </div>
    );
};

export default Footer;