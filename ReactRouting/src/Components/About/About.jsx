import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Travel"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Explore the World with Our Travel Company
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Discover new destinations, experience different cultures, and create unforgettable memories with our travel company. We are dedicated to providing you with the best travel experiences.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Whether you're looking for adventure, relaxation, or a mix of both, we have the perfect trip for you. Our team of travel experts is here to help you plan your dream vacation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
