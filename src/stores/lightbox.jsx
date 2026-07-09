import { createContext, useContext, useState, useCallback } from "react";

const LightboxContext = createContext(null);

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, images: [], index: 0 });

  const openLightbox = useCallback((images, index) => {
    setState({ open: true, images: Array.from(images), index });
  }, []);

  const close = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
  }, []);

  const prev = useCallback(() => {
    setState((s) => {
      if (s.images.length <= 1) return s;
      return { ...s, index: (s.index - 1 + s.images.length) % s.images.length };
    });
  }, []);

  const next = useCallback(() => {
    setState((s) => {
      if (s.images.length <= 1) return s;
      return { ...s, index: (s.index + 1) % s.images.length };
    });
  }, []);

  return (
    <LightboxContext.Provider value={{ ...state, openLightbox, close, prev, next }}>
      {children}
    </LightboxContext.Provider>
  );
}

export function useLightboxStore() {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error("useLightboxStore must be used within LightboxProvider");
  return ctx;
}
