import React from 'react';
import starIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';
import { Link } from 'react-router';

const App = ({ app }) => {
    if (!app) return null;

    return (

        <Link to={`/appDetails/${app.id}`}>

            <div className="
            w-full max-w-[300px] 
            bg-white shadow-md rounded-2xl overflow-hidden 
            hover:shadow-xl hover:-translate-y-2 
            transition-transform duration-300
            flex flex-col
            ">
                <div className="relative w-full h-52">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 truncate mb-3">{app.title}</h3>

                    <div className="mt-auto flex justify-between items-center text-gray-600 text-sm">
                        <div className="flex items-center gap-2 bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                            <img src={downloadIcon} alt="Downloads" className="w-4 h-4 opacity-80" />
                            <span>{app.downloads}</span>
                        </div>


                        <div className="flex items-center gap-2">
                            <img src={starIcon} alt="Rating" className="w-4 h-4 opacity-80" />
                            <span>{app.ratingAvg}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default App;
