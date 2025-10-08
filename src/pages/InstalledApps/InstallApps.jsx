import React, { useEffect, useState } from "react";
import InstallApp from "./InstallApp";
import { getStoredApps } from "../../Utility/localStorage";

const InstallApps = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const apps = getStoredApps();
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    setInstalledApps((prev) => prev.filter((app) => app.id !== id));
  };

  
  const parseDownloads = (value) => {
    if (!value) return 0;
    let str = value.toString().toUpperCase().replace(/[+,]/g, "").trim();

    if (str.endsWith("K")) {
      return parseFloat(str) * 1000;
    } else if (str.endsWith("M")) {
      return parseFloat(str) * 1000000;
    } else {
      return parseFloat(str) || 0;
    }
  };

  
  const handleSort = (type) => {
    let sortedApps = [...installedApps];

    if (type === "High-Low") {
      sortedApps.sort((a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads));
    } else if (type === "Low-High") {
      sortedApps.sort((a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads));
    }

    setInstalledApps(sortedApps);
    setSort(type);
  };

  return (
    <div className="p-6">
      
      <div className="text-center mb-16 mt-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Your Installed Apps
        </h1>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Explore all apps you've installed.
        </p>
      </div>

      
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 font-medium">
          ({installedApps.length}) Apps Found
        </p>

        <details className="dropdown">
          <summary className="btn m-1">
            Sort by: {sort || "Select"}
          </summary>
          <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm">
            <li>
              <a onClick={() => handleSort("High-Low")}>High → Low (Downloads)</a>
            </li>
            <li>
              <a onClick={() => handleSort("Low-High")}>Low → High (Downloads)</a>
            </li>
          </ul>
        </details>
      </div>

     
      <div className="mt-6">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <InstallApp key={app.id} app={app} onUninstall={handleUninstall} />
          ))
        ) : (
          <p className="text-center text-gray-500">
            No apps installed yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default InstallApps;
