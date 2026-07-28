import { FaFacebook, FaGithub, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 ">
            <div className="space-y-2">
                <h1 className=" text-3xl font-semibold">Freelancer</h1>
                <p className="text-gray-400">
                    Always ready to be your friend. Come & Contact with us to
                    share your <br /> memorable moments, to share with your best
                    companion.
                </p>
                <h2 className="font-bold text-2xl">Get in Touch</h2>
                <p className="flex gap-1">
                    {" "}
                    <FaPhone />
                    +88 01533 333 333
                </p>
                <p className="flex gap-1">
                    {" "}
                    <MdEmail />
                    info@gmail.com
                </p>
                <p className="flex gap-1">
                    {" "}
                    <FaMapMarkerAlt />
                    72, Wall street, King Road, Dhaka
                </p>
            </div>
            <nav>
                <a className="text-xl text-gray-400">Terms & Conditions</a>
                <a className="link link-hover">Agreement</a>
                <a className="link link-hover">Changes</a>
                <a className="link link-hover">User Accounts</a>
                <a className="link link-hover">Prohibited Activities</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="w-80">
                    <label>Enter your email address</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input join-item"
                        />
                        <button className="btn text-white bg-[#0E3608] join-item">
                            Subscribe
                        </button>
                    </div>
                </fieldset>
                <div className="flex gap-4">
                    <a
                        href="https://www.youtube.com/channel/UCMkuZW-TroSQvp5ZHt0VHmA"
                        target="_blank"
                    >
                        <IoLogoYoutube size={24} />
                    </a>
                    <a href="https://github.com/" target="_blank">
                        <FaGithub size={24} />
                    </a>
                    <a>
                        {" "}
                        <FaFacebook size={24} />{" "}
                    </a>
                </div>
            </form>
        </footer>
    );
};

export default Footer;
