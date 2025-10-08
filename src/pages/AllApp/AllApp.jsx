import React, { Suspense } from 'react';
import { useLoaderData } from 'react-router';
import App from '../../component/App/App';

const AllApp = () => {
    const allApp = useLoaderData(); // now it will contain all apps

    return (
        <div>
            <div className="px-20 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our All Applications
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Explore All Apps on the Market developed by us. We code for Millions
                    </p>
                </div>
                <div className=' mb-18 flex justify-between'>
                    <h1>({allApp.length})Apps Found</h1>
                    <div>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
                            <input type="search" required placeholder="Search" />
                        </label>
                    </div>
                </div>

                <Suspense fallback={<p className="text-center text-gray-500">Loading apps...</p>}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {allApp.map((app) => (
                            <div key={app.id} className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                                <App app={app} />
                            </div>
                        ))}
                    </div>
                </Suspense>
            </div>

        </div>
    );
};
export default AllApp;