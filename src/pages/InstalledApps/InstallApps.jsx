import React, { useEffect, useState } from "react";
import InstallApp from "./InstallApp";
import { getStoredApps } from "../../Utility/localStorage";

const InstallApps = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        setInstalledApps(getStoredApps());
    }, []);

    const handleUninstall = (id) => {
        setInstalledApps((prev) => prev.filter((app) => app.id !== id));
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
            <div>
                ({installedApps.length})App Found
            </div>
            <div className="mt-6">
                {installedApps.length > 0 ? (
                    installedApps.map((app) => (
                        <InstallApp key={app.id} app={app} onUninstall={handleUninstall} />
                    ))
                ) : (
                    <p className="text-center text-gray-500">No apps installed yet.</p>
                )}
            </div>
        </div>
    );
};

export default InstallApps;
