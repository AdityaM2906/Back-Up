import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

const DynamicId = () => {
  let { id } = useParams();
  return <div>{id}</div>;
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          Home <Outlet />
        </div>
      ),
      children: [
        {
          path: "about",
          element: (
            <div>
              About <Outlet />
            </div>
          ),
          children: [{ path: ":id", element: <DynamicId /> }],
        },
      ],
    },
    {
      path: "/profile/:id",
      element: (
        <div>
          About <DynamicId />
        </div>
      ),
    },
    {
      path: "/profile",
      element: (
        <div>
          About <Outlet />
        </div>
      ),
      children: [{ path: ":id", element: <DynamicId /> }],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
