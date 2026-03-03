import bannerImg from "../assets/images/banner-main.png"
import bannerBg from "../assets/images/bg-shadow.png"

const Banner = ({handleCoin}) => {
    return (
        <div className="bg-center py-9 md:py-16 rounded-3xl bg-black mt-4 md:mt-7 lg:mt-11" style={{ backgroundImage: `url(${bannerBg})` }}>
            <div className="flex flex-col justify-center items-center space-y-5 text-center">
                <img className="w-40 md:w-auto" src={bannerImg} alt="" />
                <h1 className="text-2xl md:text-4xl font-bold px-3">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p>Beyond Boundaries Beyond Limits</p>
                <button onClick={()=>handleCoin(5000000)}
                className="btn bg-[#CBDF27] text-black rounded-lg hover:-translate-y-1 transition">Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;