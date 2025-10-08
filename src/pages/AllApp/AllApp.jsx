import React, { Suspense, useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import App from "../../component/App/App";

const AllApp = () => {
    const allApp = useLoaderData();
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredApps, setFilteredApps] = useState(allApp);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (searchTerm.trim() === "") {
            setFilteredApps(allApp);
            return;
        }

        setLoading(true);

        // Simulate a short delay for loader animation
        const timeout = setTimeout(() => {
            const filtered = allApp.filter((app) =>
                app.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredApps(filtered);
            setLoading(false);
        }, 800);

        return () => clearTimeout(timeout);
    }, [searchTerm, allApp]);

    return (
        <div>
            <div className="px-20 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
                

                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Our All Applications
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Explore all apps developed by us — crafted for millions.
                    </p>
                </div>

                
                <div className="mb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <h1 className="font-semibold text-gray-700">
                        ({filteredApps.length}) Apps Found
                    </h1>

                    <div className="relative w-full sm:w-64">
                        <input
                            type="search"
                            placeholder="Search app name..."
                            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <svg
                            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.3-4.3m0 0A7.5 7.5 0 1116.7 16.7z"
                            />
                        </svg>
                    </div>
                </div>

                
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="relative w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-purple-500 to-indigo-500 animate-slide"></div>
                        </div>
                    </div>
                ) : (
                    <Suspense fallback={<p className="text-center text-gray-500">Loading apps...</p>}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredApps.length > 0 ? (
                                filteredApps.map((app) => (
                                    <div
                                        key={app.id}
                                        className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    >
                                        <App app={app} />
                                    </div>
                                ))
                            ) : (
                                <p className="text-center col-span-full text-gray-500 text-lg">
                                    No apps found matching “{searchTerm}”.
                                </p>
                            )}
                        </div>
                    </Suspense>
                )}
            </div>
        </div>
    );
};

export default AllApp;
