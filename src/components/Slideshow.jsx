import { useEffect, useRef, useState, useCallback } from "react";
import { useLightboxStore } from "../stores/lightbox";

export default function Slideshow({ images, interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);
  const startXRef = useRef(0);
  const { openLightbox } = useLightboxStore();

  const goTo = useCallback(
    (idx) => {
      if (idx < 0) idx = images.length - 1;
      if (idx >= images.length) idx = 0;
      setCurrent(idx);
    },
    [images.length]
  );

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  const startAuto = useCallback(() => {
    stopAuto();
    if (!pausedRef.current && images.length > 1) {
      timerRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % images.length);
      }, interval);
    }
  }, [interval, images.length]);

  const stopAuto = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [startAuto, stopAuto]);

  const handleImageClick = useCallback(() => {
    const flat = images.map((s) => ({ src: s.src, alt: s.alt }));
    openLightbox(flat, current);
  }, [images, current, openLightbox]);

  const isSingle = images.length <= 1;

  return (
    <div
      className={`slideshow ${isSingle ? "single" : "multi"}`}
      data-interval={interval}
      onMouseEnter={() => {
        pausedRef.current = true;
        stopAuto();
      }}
      onMouseLeave={() => {
        pausedRef.current = false;
        startAuto();
      }}
      onTouchStart={(e) => {
        startXRef.current = e.changedTouches[0].screenX;
      }}
      onTouchEnd={(e) => {
        const diff = e.changedTouches[0].screenX - startXRef.current;
        if (Math.abs(diff) > 40) {
          if (diff > 0) prev();
          else next();
          startAuto();
        }
      }}
    >
      <div
        className="slideshow-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.alt}
            className="project-img slideshow-slide"
            loading="lazy"
            onClick={handleImageClick}
          />
        ))}
      </div>
      {!isSingle && (
        <>
          <button
            className="slideshow-btn prev"
            aria-label="Previous slide"
            onClick={(e) => { e.stopPropagation(); prev(); startAuto(); }}
          >
            ‹
          </button>
          <button
            className="slideshow-btn next"
            aria-label="Next slide"
            onClick={(e) => { e.stopPropagation(); next(); startAuto(); }}
          >
            ›
          </button>
          <div className="slideshow-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "active" : ""}`}
                aria-label={`Slide ${i + 1}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                  startAuto();
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
