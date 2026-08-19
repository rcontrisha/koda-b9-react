import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import Router from "./Router";
import UserProvider from "./contexts/user/UserProvider";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <UserProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </UserProvider>
  // </StrictMode>
);
