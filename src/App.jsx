import { useState } from "react";

import "./App.css";
import Home from "./Componant/Home/Home";
import Protofolio from "./Componant/Protofolio/Protofolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Componant/About/About";
import Contact from "./Componant/Contact/Contact";
import Layout from "./Componant/Layout/Layout";
import NotFound from "./Componant/NotFound/NotFound";

let routers = createBrowserRouter([
  {
    path: "/first-project/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "protofolio", element: <Protofolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
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
