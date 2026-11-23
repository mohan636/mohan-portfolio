import { useState, useEffect } from 'react';

/**
 * Custom hook to detect the currently active section based on scroll position.
 * @param {string[]} sectionIds - Array of element IDs to track.
 * @param {number} offset - Vertical pixel offset (e.g. navbar height + buffer).
 */
export function useActiveSection(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // When reaching near the bottom of the page, activate the last section
      const documentHeight = document.documentElement.scrollHeight;
      const windowBottom = window.innerHeight + window.scrollY;
      if (windowBottom >= documentHeight - 60) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // Check section offsets from bottom to top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
