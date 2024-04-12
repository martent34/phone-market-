import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllContact from "./contact/AllContact";
import AllHome from "./home/AllHome";
import Phone from "./shopping/Phone";
import Cover from "./shopping/Cover";
import EarPhone from "./shopping/EarPhone";
import SmartWatch from "./shopping/SmartWatch";
import EarBuds from "./shopping/EarBuds";
import Carts from "./Allcart/Carts";
import Allabout from "./about/Allabout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllHome/>
  },
  {
    path: "contact",
    element:<AllContact/>
  },
  {
    path: "shoping",
    element:<Phone/>
  },
  {
    path: "about",
    element:<Allabout/>
  },
  {
    path: "phones",
    element:<Phone/>
  },
  {
    path: "covers",
    element:<Cover/>
  },
  {
    path: "Earphone",
    element:<EarPhone/>
  },
  {
    path: "smart watch",
    element:<SmartWatch/>
  },
  {
    path: "earbuds",
    element:<EarBuds/>
  },
  {
    path: "allcart",
    element:<Carts/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);