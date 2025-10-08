import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import { addToStoredDB, getStoredApps } from '../../Utility/localStorage';
import reviewsIcon from '../../assets/like.png';
import ratingsIcon from '../../assets/icon-ratings.png';
import downloadsIcon from '../../assets/icon-downloads.png';
import AppNotFoundPage from '../ErrorPage/AppNotFoundPage';

const AppsDetails = () => {
  const app = useLoaderData();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getStoredApps();
    const isInstalled = installedApps.some((item) => item.id === app?.id);
    setInstalled(isInstalled);
  }, [app]);

  const handleInstall = () => {
    addToStoredDB(app);
    setInstalled(true);

    Swal.fire({
      title: 'Installed!',
      text: `${app.title} has been installed successfully.`,
      icon: 'success',
      confirmButtonColor: '#16a34a',
    });
  };

  if (!app) return <AppNotFoundPage />;

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6 mt-8 border">
      {/* Header Section */}
      <div className="flex items-start gap-6">
        <img
          src={app.image}
          alt={app.title}
          className="w-24 h-24 rounded-xl object-cover"
        />
        <div className="flex-1">
          <h1 className="text-2xl font-semibold">{app.title}</h1>
          <p className="text-blue-600 text-sm">
            <span className="text-gray-500">Developed by:</span> {app.companyName}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-6 mt-3 text-gray-700">
            <div className="flex items-center gap-2">
              <img src={downloadsIcon} alt="downloads" className="w-5 h-5" />
              <span>{app.downloads}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={ratingsIcon} alt="ratings" className="w-5 h-5" />
              <span>{app.ratingAvg}</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={reviewsIcon} alt="reviews" className="w-5 h-5" />
              <span>{app.reviews} Reviews</span>
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

      {/* ✅ Ratings Bar Graph */}
      {app.ratings && app.ratings.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Ratings Breakdown</h2>
          {app.ratings
            .slice()
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
      )}

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppsDetails;
