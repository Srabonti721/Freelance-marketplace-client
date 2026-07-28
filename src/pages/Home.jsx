import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
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
            <Fade triggerOnce>
                <Slider />
            </Fade>

            <Fade direction="up" triggerOnce>
                <Banner />
            </Fade>

            <Fade direction="left" triggerOnce>
                <Featured />
            </Fade>

            <Fade direction="right" triggerOnce>
                <Faq />
            </Fade>
        </div>
    );
};

export default Home;
