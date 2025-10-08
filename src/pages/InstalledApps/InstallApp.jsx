import React from "react";
import starIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";
import { removeFromStoredDB } from "../../Utility/localStorage";

const InstallApp = ({ app, onUninstall }) => {
  const handleUninstall = () => {
    removeFromStoredDB(app.id);
    onUninstall(app.id); // notify parent to update UI
  };

  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-xl p-4 mb-3 border hover:shadow-md transition-all duration-200">
      <div className="flex items-center gap-4">
        <img
          src={app.image || "https://via.placeholder.com/60"}
          alt={app.title}
          className="w-14 h-14 rounded-lg bg-gray-200 object-cover"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{app.title}</h2>
          <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
            <div className="flex items-center gap-1">
              <img src={downloadIcon} alt="downloads" className="w-4 h-4" />
              <span className="text-green-500 font-medium">{app.downloads}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={starIcon} alt="ratings" className="w-4 h-4" />
              <span className="text-orange-500 font-medium">{app.ratingAvg}</span>
            </div>
            <span>{app.size} MB</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleUninstall}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all"
      >
        Uninstall
      </button>
    </div>
  );
};

export default InstallApp;
