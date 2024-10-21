import { useState } from "react";
import "./index.css";
import Flags from "./components/flags";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Rules from "./components/rules";
import PageHeader from "./components/page-header";

export default function App() {
  return (
    <div className="page">
      <PageHeader />
      <div className="Flags">
        <Flags />
      </div>
    </div>
  );
}
