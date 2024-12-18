import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import ContactPage from "../pages/contact";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage/>
  },
  {
    path: '/contact',
    element: <ContactPage/>
  }
]);
