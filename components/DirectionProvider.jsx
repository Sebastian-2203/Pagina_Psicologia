'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const DirectionContext = createContext(null);

export function useDirection() {
  const ctx = useContext(DirectionContext);
  if (!ctx) throw new Error('useDirection must be used inside DirectionProvider');
  return ctx;
}

export function DirectionProvider({ children }) {
  const [direction, setDirection] = useState('refugio');
  const [density, setDensity] = useState('regular');

  // Load saved preferences on mount
  useEffect(() => {
    try {
      const savedDir = localStorage.getItem('doh-direction');
      const savedDen = localStorage.getItem('doh-density');
      if (savedDir) setDirection(savedDir);
      if (savedDen) setDensity(savedDen);
    } catch (_) {
      // localStorage may not be available
    }
  }, []);

  // Sync direction to <html> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-direction', direction);
    try { localStorage.setItem('doh-direction', direction); } catch (_) {}
  }, [direction]);

  // Sync density to <html> and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-density', density);
    try { localStorage.setItem('doh-density', density); } catch (_) {}
  }, [density]);

  const value = { direction, setDirection, density, setDensity };

  return (
    <DirectionContext.Provider value={value}>
      {children}
    </DirectionContext.Provider>
  );
}
