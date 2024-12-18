import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { routes } from "./routes";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />,
);
