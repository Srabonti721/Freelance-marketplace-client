import { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthProvider";

const Login = () => {
    const { GoogleSignIn, loginUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("🦄 User login successfully !", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const handleGoogleLogin = () => {
        GoogleSignIn()
            .then((result) => {
                console.log(result.user);
                toast.success("🦄 User login with google successfully !", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="py-10 max-w-lg mx-auto">
            <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">Login now!</h1>
                <div className="card-body">
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="input w-full"
                            placeholder="Email"
                        />
                        <label className="label">Password</label>
                        <input
                            name="password"
                            type="password"
                            className="input w-full"
                            placeholder="Password"
                        />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn hover:bg-gray-600 btn-neutral mt-4">
                            Login
                        </button>
                    </form>
                    <p>
                        Don't have an account?
                        <Link
                            className="text-blue-800 underline text-sm"
                            to="/auth/register"
                        >
                            {" "}
                            Register
                        </Link>
                    </p>
                    -------------------------------------- or
                    --------------------------------------
                    {/* Google */}
                    <button
                        onClick={handleGoogleLogin}
                        className="btn bg-white hover:bg-red-400 text-black border-[#e5e5e5]"
                    >
                        <svg
                            aria-label="Google logo"
                            width="16"
                            height="16"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <g>
                                <path d="m0 0H512V512H0" fill="#fff"></path>
                                <path
                                    fill="#34a853"
                                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                                ></path>
                                <path
                                    fill="#4285f4"
                                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                                ></path>
                                <path
                                    fill="#fbbc02"
                                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                                ></path>
                                <path
                                    fill="#ea4335"
                                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                                ></path>
                            </g>
                        </svg>
                        Login with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
