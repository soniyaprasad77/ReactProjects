import React from "react";
import { Link, NavLink } from 'react-router-dom';



export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/png;base64,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"
                                className="mr-3 h-16"
                                alt="Travel Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Destinations</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/destinations/europe" className="hover:underline">
                                        Europe
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/destinations/asia" className="hover:underline">
                                        Asia
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Company</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/about" className="hover:underline">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:underline">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy-policy" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms-conditions" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://example-travel.com" className="hover:underline">
                            Example Travel
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <a href="https://facebook.com/exampletravel" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://twitter.com/exampletravel" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="https://instagram.com/exampletravel" className="text-gray-500 hover:text-gray-900" target="_blank" rel="noreferrer">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Instagram page</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
