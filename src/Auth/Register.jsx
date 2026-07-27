import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const Register = () => {
    const { createUser, GoogleSignIn, updateUser, setUsers } = use(AuthContext);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const photo = formData.get("photo");
        const email = formData.get("email");
        const password = formData.get("password");
        if (password.length < 6) {
            return setError("Password must be at least 6 characters.");
        }
        if (!/[A-Z]/.test(password)) {
            return setError("Password must be 1 Upper case");
        }
        if (!/[a-z]/.test(password)) {
            return setError("Password must be 1 lower case");
        }
        if (!/\d/.test(password)) {
            return setError("Password must be 1 number case");
        }
        console.log(name, photo, email, password);
        createUser(email, password)
            .then((result) => {
                const users = result.user;
                console.log(users);
                updateUser(name, photo);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
            
            });
    };

    const handleGoogleRegister = () => {
        GoogleSignIn()
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="my-10 max-w-lg mx-auto">
            <div className="card bg-base-100 w-full py-5 shrink-0 shadow-2xl">
                <h1 className="text-5xl font-bold text-center">
                    Register now!
                </h1>
                <div className="card-body">
                    <form onSubmit={handleRegister} className="fieldset">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full"
                            placeholder="Name"
                        />
                        <label className="label">PhotoURL</label>
                        <input
                            name="photo"
                            type="text"
                            className="input w-full"
                            placeholder="PhotoURL"
                        />
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
                        {error && <p className="text-red-600 ">{error}</p>}
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn hover:bg-gray-600 btn-neutral mt-4">
                            Register
                        </button>
                    </form>
                    <p>
                        have already an account?
                        <Link
                            className="text-blue-800 underline text-sm"
                            to="/auth/login"
                        >
                            {" "}
                            Login
                        </Link>
                    </p>
                    -------------------------------------- or
                    -------------------------------------
                    {/* Google */}
                    <button
                        onClick={handleGoogleRegister}
                        className="btn hover:bg-red-400 bg-white text-black border-[#e5e5e5]"
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
                        Register with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
