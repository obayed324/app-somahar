import React, { Suspense } from 'react';
import { Link, useNavigate } from 'react-router';
import App from '../../component/App/App';

const Apps = ({ trendAppPromise }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="px-20 sm:px-8 lg:px-12 py-12 max-w-7xl mx-auto">
                
                <div className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                        Trending Apps
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Explore all trending apps in the market developed by us. Find the best apps based on downloads and user ratings.
                    </p>
                </div>


                <Suspense fallback={<p className="text-center text-gray-500">Loading apps...</p>}>
                    <div
                        className="
                                grid 
                                grid-cols-1 
                                sm:grid-cols-2 
                                md:grid-cols-3 
                                lg:grid-cols-4 
                                gap-8
                            "
                    >
                        {trendAppPromise.map((app) => (
                            <div
                                key={app.id}
                                className="
                                transform 
                                transition-all 
                                duration-300 
                                hover:scale-105 
                                hover:shadow-xl
                            "
                            >
                                <App app={app} />
                            </div>
                        ))}
                    </div>
                </Suspense>
            </div>
            

            <Link to={'/app'}>
                <div className="flex justify-center mb-10">
                    <button
                        className="px-12 py-2 rounded text-white font-semibold text-lg
                bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)]
                hover:scale-105 transition-transform duration-300"
                    >
                        Show All
                    </button>
                </div>

            </Link>
            

        </div>

    );
};

export default Apps;
