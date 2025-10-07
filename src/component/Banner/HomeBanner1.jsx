import React from "react";
import appStore from "../../assets/AppStore.png";
import playStore from "../../assets/playstore.png";
import hero from "../../assets/hero.png"
const HomeBanner1 = () => {
    return (
        <div className="w-full overflow-hidden">
            {/* HERO SECTION */}
            <div className="max-w-[1140px] mx-auto px-4 sm:px-6 md:px-8 text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] font-semibold leading-tight mt-10">
                    We Build <br />
                    <span className="bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] bg-clip-text text-transparent font-semibold">
                        Productive
                    </span>{" "}
                    Apps
                </h1>

                <p className="text-[#627382] text-base sm:text-lg md:text-xl lg:text-[20px] text-center mt-4 px-2 sm:px-8 md:px-20">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler,
                    smarter, and more exciting. Our goal is to turn your ideas into digital
                    experiences that truly make an impact.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                    <a
                        href="https://play.google.com/store"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition text-sm sm:text-base"
                    >
                        <img className="w-5 h-5" src={playStore} alt="Play Store" />
                        <span>Play Store</span>
                    </a>

                    <a
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-2 border border-gray-400 rounded-md hover:bg-gray-100 transition text-sm sm:text-base"
                    >
                        <img className="w-5 h-5" src={appStore} alt="App Store" />
                        <span>App Store</span>
                    </a>
                </div>
            </div>

            {/* HERO IMAGE */}
            <div className="w-full flex justify-center mt-10">
                <img
                    className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[550px] object-contain"
                    src={hero}
                    alt="Hero"
                />
            </div>

            
            <div className="w-full bg-gradient-to-r from-[#6226E3] to-[#9F62F2] py-16 px-4 sm:px-6 md:px-8 lg:px-12 text-white mb-[100px]">
                <div className="max-w-[1140px] mx-auto text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10">
                        Trusted By Millions, Built For You
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Total Downloads */}
                        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <p className="text-base sm:text-lg text-[#D4D4D8] mb-2">
                                Total Downloads
                            </p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">
                                29.6M
                            </h3>
                            <p className="text-sm text-[#C4C4CC]">21% More Than Last Month</p>
                        </div>

                        {/* Total Reviews */}
                        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <p className="text-base sm:text-lg text-[#D4D4D8] mb-2">Total Reviews</p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">906K</h3>
                            <p className="text-sm text-[#C4C4CC]">46% More Than Last Month</p>
                        </div>

                        {/* Active Apps */}
                        <div className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm rounded-2xl p-6 md:p-8">
                            <p className="text-base sm:text-lg text-[#D4D4D8] mb-2">Active Apps</p>
                            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1">132+</h3>
                            <p className="text-sm text-[#C4C4CC]">31 More Will Launch</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HomeBanner1;
