import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login/Login";
import HomeMenu from "./Home/HomeMenu";
import TransferMenu from "./Home/TransferMenu/TransferMenu";

function Main() {
  const [changeHomeMenu, setChangeHomeMenu] = useState(false);

  const [userDataMain, setUserDataMain] = useState({});

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: changeHomeMenu === true ? (
        <TransferMenu
        userDataMain={userDataMain}
        changeHomeMenu={changeHomeMenu}
        setChangeHomeMenu={setChangeHomeMenu}
        />
      ) : (
        <HomeMenu
          setUserDataMain = {setUserDataMain}
          changeHomeMenu={changeHomeMenu}
          setChangeHomeMenu={setChangeHomeMenu}
        />
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
