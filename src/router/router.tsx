import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Landingpage from "../pages/Landingpage";
import Visas from "../pages/Visas";
import MemberArea from "../pages/MemberArea";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landingpage /> },
      { path: "Visas", element: <Visas /> },
      { path: "MemberArea ", element: <MemberArea /> },
      { path: "AboutUs ", element: <AboutUs /> },
      { path: "ContactUs ", element: <Contact /> },
    ],
  },
]);
