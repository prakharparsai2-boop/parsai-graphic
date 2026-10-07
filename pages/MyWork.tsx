import React, { useState } from "react";
import WebsiteBackgroundWrapper from "../components/WebsiteBackgroundWrapper";
import Contact from "../components/Contact";
import { portfolioVideos, categories, VideoCategory } from "../data/portfolioVideos";
import "./MyWork.css";

const MyWork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<VideoCategory>("Talking Head");

  const filteredVideos = portfolioVideos.filter((video) => video.category === activeTab);

  // Decide grid type based on active tab
  const isVertical = activeTab === "Talking Head" || activeTab === "Reels & Shorts";

  return (
    <WebsiteBackgroundWrapper>
      <div className="my-work-page">
        {/* Header */}
        <div className="container">
          <div className="my-work-header">
            <h1 className="my-work-title anim-work-title delay-100">
              My <span className="text-accent">Work</span>
            </h1>
            <p className="my-work-subtitle anim-work-fade delay-200">
              A curated selection of commercial projects, documentaries, music
              videos, and creative experiments designed to leave a mark.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="container">
          <div className="work-tabs-container anim-work-fade delay-300">
            {categories.map((category) => (
              <button
                key={category}
                className={`work-tab-btn ${activeTab === category ? "active" : ""}`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="container">
          <div className={`video-grid ${isVertical ? "vertical-grid" : "horizontal-grid"} anim-work-fade delay-400`} key={activeTab}>
            {filteredVideos.map((video) => (
              <div key={video.id} className="video-card">
                <iframe
                  className="video-iframe"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1&showinfo=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="my-work-contact-wrapper anim-work-fade delay-500">
          <Contact />
        </div>
      </div>
    </WebsiteBackgroundWrapper>
  );
};

export default MyWork;
