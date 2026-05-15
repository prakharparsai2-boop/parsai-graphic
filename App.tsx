import React, { useEffect, useState, Suspense, lazy } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/Services";
import MyWork from "./pages/MyWork";
import ProjectDetail from "./pages/ProjectDetail";
import ContactPage from "./pages/ContactPage";

// Component to handle scrolling (top or anchor) on route change
function ScrollToTop({ isLoading }: { isLoading: boolean }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (isLoading) return;

    // We check BOTH the React Router state AND the raw window location
    // This handles direct entries like http://localhost:3000/trending-edits
    const isTrendingEdits =
      hash.includes("trending-edits") ||
      pathname.includes("trending-edits") ||
      window.location.pathname.includes("trending-edits") ||
      window.location.hash.includes("trending-edits");

    if (isTrendingEdits) {
      const element = document.getElementById("trending-edits");
      if (element) {
        // Use a longer timeout to ensure the DOM has fully settled after loader
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, isLoading]);

  return null;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const assets = [
      "/3d-animation.jpg",
      "/arrow.gif",
      "/event-video.jpg",
      "/hero.png",
      "/mr-beast.jpg",
      "/prakhar.jpg",
      "/talking-head.jpg",
    ];

    const totalAssets = assets.length + 1; // +1 for fonts
    let loadedCount = 0;
    let assetsLoaded = false;
    let timerFinished = false;

    const startTime = Date.now();
    const minDuration = 1500; // 1.5 seconds

    // Update progress based on time to ensure smooth linear movement
    const progressInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const timeProgress = Math.min((elapsedTime / minDuration) * 100, 100);

      if (assetsLoaded) {
        setProgress(timeProgress);
        if (timeProgress >= 100) {
          timerFinished = true;
          clearInterval(progressInterval);
          setTimeout(() => setIsLoading(false), 500);
        }
      } else {
        setProgress(Math.min(timeProgress, 95));
      }
    }, 16);

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount >= totalAssets) {
        assetsLoaded = true;
      }
    };

    assets.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = checkAllLoaded;
      img.onerror = checkAllLoaded;
    });

    if (document.fonts) {
      document.fonts.ready.then(checkAllLoaded).catch(checkAllLoaded);
    } else {
      checkAllLoaded();
    }

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <Router>
      <Loader progress={progress} isLoading={isLoading} />
      <ScrollToTop isLoading={isLoading} />
      {!isLoading && (
        <div className="app-wrapper loaded">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending-edits" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<MyWork />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingWhatsApp />
        </div>
      )}
    </Router>
  );
};

export default App;
