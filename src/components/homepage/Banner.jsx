import {} from "react-router";
import user1 from "../../assets/user1.jpg";
import user2 from "../../assets/user2.jpg";
import user3 from "../../assets/user3.jpg";
import user4 from "../../assets/user4.jpg";
const Banner = () => {
    return (
        <div className="relative">
            <div>
                <div className="avatar absolute left-40 top-4">
                    <div className="w-20 rounded-full">
                        <img src={user1} />
                    </div>
                </div>
                {/* 2 */}
                <div className="avatar absolute right-40 top-4 ">
                    <div className="w-20 rounded-full">
                        <img src={user2} />
                    </div>
                </div>
                {/* 3 */}
                <div className="avatar absolute bottom-6 left-4">
                    <div className="w-24 rounded-full">
                        <img src={user4} />
                    </div>
                </div>
                {/* 4 */}
                <div className="avatar absolute bottom-4 right-10">
                    <div className="w-24 rounded-full">
                        <img src={user3} />
                    </div>
                </div>
            </div>

            <div className="hero p-10 my-10">
                <div className="hero-content text-center">
                    <div className="max-w-lg p-10">
                        <h1 className="text-4xl font-semibold">
                            Join us & Explore Thousands of Freelancer
                        </h1>
                        <p className="py-6 text-sm">
                            Work with talented people at the most affordable
                            price to get the most out of your time and cost
                        </p>
                        <label className="input">
                            <svg
                                className="h-[1em] opacity-50"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input
                                type="search"
                                required
                                placeholder="what are you looking for?"
                            />
                        </label>
                        <button className="btn join-item rounded-r-full btn-primary">
                            Subscribe
                        </button>
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
