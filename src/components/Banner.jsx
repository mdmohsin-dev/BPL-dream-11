import bannerImg from "../assets/images/banner-main.png"
import bannerBg from "../assets/images/bg-shadow.png"

const Banner = () => {
    return (
        <div className="bg-center py-16 rounded-3xl bg-black" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="flex flex-col justify-center items-center space-y-5 text-center">
                <img src={bannerImg} alt="" />
                <h1 className="text-4xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className="btn bg-[#CBDF27] text-black">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;