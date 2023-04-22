import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import HomeMenu from "./Home/HomeMenu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:"/home",
    element: <HomeMenu/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
