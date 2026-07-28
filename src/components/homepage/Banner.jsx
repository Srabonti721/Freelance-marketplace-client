import {} from "react-router";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";

const Banner = () => {
    return (
        <div className="relative">
            <div>
                <div className="avatar absolute left-6  md:left-40 top-20 md:top-4">
                    <div className="w-10 md:w-20 rounded-full">
                        <img src={user1} />
                    </div>
                </div>
                {/* 2 */}
                <div className="avatar absolute right-6 md:right-40 top-20 md:top-4 ">
                    <div className=" w-10 md:w-20 rounded-full">
                        <img src={user2} />
                    </div>
                </div>
                {/* 3 */}
                <div className="avatar absolute bottom-10 md:bottom-6 left-3 md:left-4">
                    <div className="w-14 rounded-full">
                        <img src={user4} />
                    </div>
                </div>
                {/* 4 */}
                <div className="avatar absolute bottom-8 md:bottom-4 right-3 md:right-10">
                    <div className="w-14 rounded-full">
                        <img src={user3} />
                    </div>
                </div>
            </div>

            <div className="hero p-10 my-10">
                <div className="hero-content text-center">
                    <div className="max-w-lg md:p-10">
                        <h1 className="text-2xl md:text-4xl font-semibold">
                            Join us & Explore Thousands of Freelancer
                        </h1>
                        <p className="py-6 text-sm">
                            Work with talented people at the most affordable
                            price to get the most out of your time and cost
                        </p>
                        <div className="join">
                            <input
                                className="input join-item"
                                placeholder="what are you looking for?"
                            />
                            <button className="btn join-item  rounded-r-full bg-[#0E3608] text-white">
                                search
                            </button>
                        </div>
                        <p className="text-sm my-4">
                            Popular Searches : Designer, Developer, Web
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
