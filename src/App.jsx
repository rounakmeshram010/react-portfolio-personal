import React, { Suspense, lazy } from "react";
import Navbar from "./Navbar";
import { ThemeProvider, useTheme } from "./ThemeContext";
import "./App.css";

const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Skills = lazy(() => import("./Skills"));
const Resume = lazy(() => import("./Resume"));
const Contact = lazy(() => import("./Contact"));

function Content() {
  const { theme } = useTheme();

  const appStyle = {
    minHeight: "100vh",
    width: "100vw",
    backgroundColor: theme === "light" ? "#f5f5f5" : "#1a1a1a",
    color: theme === "light" ? "#333" : "#f5f5f5",
    transition: "all 0.3s ease",
  };

  return (
    <div style={appStyle}>
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="resume"><Resume /></section>
        <section id="contact"><Contact /></section>
      </Suspense>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Content />
    </ThemeProvider>
  );
}

export default App;