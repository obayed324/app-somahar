import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import reviewsIcon from '../../assets/like.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import downloadsIcon from '../../assets/icon-downloads.png';

const AppsDetails = () => {
  const app = useLoaderData(); 
  const [installed, setInstalled] = useState(false);

  const handleInstall = () => setInstalled(true);

  
  const formatNumber = (num) => {
    if (!num) return 0;
    if (typeof num === 'string' && num.includes('M')) return num;
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num;
  };

  if (!app) {
    return (
      <div className="text-center text-gray-600 mt-10">
        App not found.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mt-8 border">
      
      <div className="flex items-start gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{app.title}</h1>
          <p className="text-blue-600 text-sm">Developed by {app.companyName}</p>

          
          <div className="flex items-center gap-6 mt-3 text-gray-700">
            <div className="flex items-center gap-2">
              <img src={downloadsIcon} alt="downloads" className="w-5 h-5" />
              <span>{formatNumber(app.downloads)}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={ratingsIcon} alt="ratings" className="w-5 h-5" />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={reviewsIcon} alt="reviews" className="w-5 h-5" />
              <span>{formatNumber(app.reviews)} Reviews</span>
            </div>
          </div>

          {/* Install Button */}
          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-4 px-5 py-2 rounded-lg text-white font-medium transition-all ${
              installed
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {installed ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* Ratings */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Ratings</h2>
        {app.ratings
          ?.slice()
          .reverse()
          .map((rating) => (
            <div key={rating.name} className="flex items-center mb-2">
              <span className="w-16 text-sm">{rating.name}</span>
              <div className="flex-1 bg-gray-200 rounded-full h-3 mx-2">
                <div
                  className="bg-orange-400 h-3 rounded-full"
                  style={{
                    width: `${
                      (rating.count /
                        Math.max(...app.ratings.map((r) => r.count))) *
                      100
                    }%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-gray-600">{rating.count}</span>
            </div>
          ))}
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>
    </div>
  );
};

export default AppsDetails;
