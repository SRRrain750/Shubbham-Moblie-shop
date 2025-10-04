import React, { useState } from 'react';
// close eye icon
import { FaEyeSlash } from "react-icons/fa";
// open eye icon
import { FaEye } from "react-icons/fa";

const Register = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    };


    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) {
            return;
        }

        console.log("Form submitted:", data);
        setSubmitted(true); // ✅ success message ke liye
    };


    // ✅ Check if all fields are filled AND passwords match
    const isFormValid =
        data.name &&
        data.email &&
        data.password &&
        data.confirmPassword &&
        data.password === data.confirmPassword;

    return (
        <section className="w-full container mx-auto px-2">
            <div className="bg-white my-4 w-full max-w-lg mx-auto rounded p-7">
                <p>Welcome to Shubham Mobile</p>

                <form className="grid gap-4 mt-6" onSubmit={handleSubmit}>


                    {/* Name */}
                    <div className="grid gap-1">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            value={data.name}
                            onChange={handleChange}
                            className="bg-blue-50 p-2 border rounded outline-none 
                            focus:border-2 focus:border-primary-200"
                        />
                    </div>

                    {/* Email */}
                    <div className="grid gap-1">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            value={data.email}
                            onChange={handleChange}
                            className="bg-blue-50 p-2 border rounded outline-none 
                            focus:border-2 focus:border-primary-200"
                        />
                    </div>

                    {/* Password */}
                    <div className="grid gap-1 relative">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            value={data.password}
                            onChange={handleChange}
                            className="bg-blue-50 p-2 border rounded pr-10 outline-none 
                            focus:border-2 focus:border-primary-200"
                        />
                        {/* Eye Icon */}
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-gray-600"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                        </span>
                    </div>

                    {/* Confirm Password */}
                    <div className="grid gap-1 relative">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Re-enter your password"
                            value={data.confirmPassword}
                            onChange={handleChange}
                            className="bg-blue-50 p-2 border rounded pr-10 outline-none 
                            focus:border-2 focus:border-primary-200"
                        />
                        {/* Eye Icon */}
                        <span
                            className="absolute right-3 top-9 cursor-pointer text-gray-600"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                        >
                            {showConfirmPassword ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                        </span>
                    </div>

                    {/* Password mismatch error */}
                    {data.confirmPassword && data.password !== data.confirmPassword && (
                        <p className="text-red-500 text-sm">Passwords do not match</p>
                    )}

                    {/* Register Button */}
                    <button
                        type="submit"
                        disabled={!isFormValid}
                        className={`py-2 rounded transition-colors duration-300 
                               ${isFormValid
                                ? "bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                                : "bg-gray-400 text-white cursor-not-allowed"}`}
                    >
                        Register
                    </button>

                    {submitted && (
                        <p className="text-green-600 text-sm mt-2">✅ Registration successful!</p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Register;
