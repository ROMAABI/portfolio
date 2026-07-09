import { useEffect, useCallback } from "react";
import { useLightboxStore } from "../stores/lightbox";

export default function Lightbox() {
  const { images, index, open, close, prev, next } = useLightboxStore();

  const onKeyDown = useCallback(
    (e) => {
      if (!open) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft" && images.length > 1) prev();
      if (e.key === "ArrowRight" && images.length > 1) next();
    },
    [open, close, prev, next, images.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open || !images.length) return null;

  const img = images[index];
  const isSingle = images.length <= 1;

  return (
    <div
      className={`lightbox open ${isSingle ? "hidden-nav" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
    >
      <button className="lightbox-close" aria-label="Close" onClick={close}>
        ✕
      </button>
      {!isSingle && (
        <>
          <button className="lightbox-prev" aria-label="Previous image" onClick={prev}>
            ‹
          </button>
          <button className="lightbox-next" aria-label="Next image" onClick={next}>
            ›
          </button>
          <div className="lightbox-counter">
            {index + 1} / {images.length}
          </div>
        </>
      )}
      <img src={img.src} alt={img.alt || ""} className="lightbox-img" />
    </div>
  );
}
