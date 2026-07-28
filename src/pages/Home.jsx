import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Faq from "../components/Faq";
import Banner from "../components/homepage/Banner";
import Featured from "../components/homepage/Featured";
import Slider from "../components/homepage/Slider";

const Home = () => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
    return (
        <div>
            <Helmet>
                <title>Freelances || Home</title>
            </Helmet>

            <div className="flex justify-end p-5">
                <input
                    type="checkbox"
                    className="toggle"
                    checked={theme === "dark"}
                    onChange={() => {
                        setTheme(theme === "light" ? "dark" : "light");
                    }}
                />
            </div>
            <Slider />
            <Banner />
            <Featured />
            <Faq />
        </div>
    );
};

export default Home;
