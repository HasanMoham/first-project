import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Componant/Home/Home";
import Protofolio from "./Componant/Protofolio/Protofolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Componant/About/About";
import Contact from "./Componant/Contact/Contact";
import Navbar from "./Componant/Navbar/Navbar";
import Layout from "./Componant/Layout/Layout";
import NotFound from "./Componant/NotFound/NotFound";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "protofolio", element: <Protofolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound/> },
    ],
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  );
}

export default App;
