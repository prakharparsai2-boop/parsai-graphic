import React, { useEffect, useRef, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Play } from "lucide-react";
import "swiper/css";
import "./ReelsCarousel.css";

const REELS = [
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778858804/1_Preset_TALKINGHEAD_h9lgjh.mp4",
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778859345/10k_Upload_ready_q2ues4.mp4",
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778859357/30k_Upload_ready_wkkn8r.mp4",
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778859861/Air-BNB_UploadReady_ul81ix.mp4",
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778860197/Editor-Thinks_Upload_Ready_ozpmap.mp4",
  "https://res.cloudinary.com/dlbvoeird/video/upload/v1778860323/Mr-Beast_Upload_Ready_mgey2h.mp4",
];

// React.memo prevents re-render of video slides when parent state changes
const VideoSlide = React.memo(
  ({
    src,
    isActive,
    isVisible,
  }: {
    src: string;
    isActive: boolean;
    isVisible: boolean;
  }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;
      if (isActive && isVisible) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }, [isActive, isVisible]);

    return (
      <div className={`video-container ${isActive ? "is-active" : ""}`}>
        <div className="play-indicator">
          <Play fill="white" />
        </div>
        <video
          ref={videoRef}
          src={src}
          loop
          playsInline
          className="reels-video"
        />
      </div>
    );
  },
);

const ReelsCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }, // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSwiper = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  const handleSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  return (
    <section ref={sectionRef} id="trending-edits" className="reels-section">
      <div className="reels-header container">
        <h2 className="font-display">Trending Edit's</h2>
        <p className="text-muted">
          Swipe to left and right to explore trending edits on the internet
        </p>
      </div>

      <div className="reels-carousel-container">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          loop={false}
          onSwiper={handleSwiper}
          onSlideChange={handleSlideChange}
          className="reels-swiper"
        >
          {REELS.map((src, index) => (
            <SwiperSlide
              key={index}
              className={`reels-slide ${index === activeIndex ? "is-active-slide" : ""}`}
            >
              <VideoSlide
                src={src}
                isActive={index === activeIndex}
                isVisible={isVisible}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReelsCarousel;
