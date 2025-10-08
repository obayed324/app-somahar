const getStoredApps = () => {
    const stored = localStorage.getItem("installedApps");
    return stored ? JSON.parse(stored) : [];
  };
  
  const addToStoredDB = (app) => {
    const apps = getStoredApps();
    const exists = apps.find((item) => item.id === app.id);
    if (!exists) {
      apps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(apps));
    }
  };
  
  const removeFromStoredDB = (id) => {
    const apps = getStoredApps().filter((item) => item.id !== id);
    localStorage.setItem("installedApps", JSON.stringify(apps));
  };
  
export { getStoredApps, addToStoredDB, removeFromStoredDB };
  