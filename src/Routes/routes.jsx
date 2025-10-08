import { createBrowserRouter } from "react-router";
import AllApp from '../pages/AllApp/AllApp';
import AppsDetails from '../pages/AppsDetails/AppsDetails';
import PageNotFound from '../pages/ErrorPage/PageNotFound';
import Home from '../pages/Home/Home';
import InstallApps from "../pages/InstalledApps/InstallApps";
import Root from '../pages/Root/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true,
        path: '/',
        Component: Home,
        loader: () => fetch('TrendApp.json'),
      },
      {
        path: '/app',
        Component: AllApp,
        loader: () => fetch('AllApp.json'),
      },
      {
        path: "/appDetails/:id",
        Component: AppsDetails,
        
        loader: async ({ params }) => {
          const res = await fetch('/AllApp.json');
          const data = await res.json();
          const singleApp = data.find(app => app.id.toString() === params.id);
          return singleApp;
        },
        
      },
      {
        path: '/installed',
        Component: InstallApps,
        loader: () => fetch('AllApp.json'),
      }
    ],
  },
]);
