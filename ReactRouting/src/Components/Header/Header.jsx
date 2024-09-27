import React from "react";
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/png;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/github"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}