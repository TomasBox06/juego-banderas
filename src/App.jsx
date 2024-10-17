import { useState } from "react";
import "./index.css";
import Flags from "./components/flags";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import MainPage from "./components/main-page";

export default function App() {
  return (
    <Routes>
      <Route path="/home" Component={MainPage} />
      <Route path="/flags-game" Component={Flags} />
    </Routes>
  );
}
