import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook to track active section with instant click updates
 * and smooth, synchronized scroll tracking across all navigation items and CTA buttons.
 *
 * @param {string[]} sectionIds - Array of section element IDs to track.
 * @param {number} offset - Vertical pixel offset for navbar clearance.
 */
export function useActiveSection(sectionIds, offset = 140) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');
  const isScrollLockedRef = useRef(false);
  const scrollLockTimerRef = useRef(null);

  // Manual setter invoked immediately on navigation clicks
  const setActiveSectionManual = useCallback((id) => {
    setActiveSection(id);
    isScrollLockedRef.current = true;

    if (scrollLockTimerRef.current) {
      clearTimeout(scrollLockTimerRef.current);
    }

    // Lock scroll tracking during programmatic smooth scroll (timeout fallback)
    scrollLockTimerRef.current = setTimeout(() => {
      isScrollLockedRef.current = false;
    }, 950);
  }, []);

  // Global anchor click listener for CTA buttons and internal links across the entire app
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.slice(1);
      if (sectionIds.includes(targetId)) {
        e.preventDefault();
        setActiveSectionManual(targetId);

        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          const navHeader = document.querySelector('.navbar-header');
          const headerHeight = navHeader ? navHeader.offsetHeight : 72;
          const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerHeight;

          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth',
          });

          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [sectionIds, setActiveSectionManual]);

  useEffect(() => {
    // When smooth scrolling finishes, unlock manual scroll detection
    const handleScrollEnd = () => {
      if (isScrollLockedRef.current) {
        isScrollLockedRef.current = false;
        if (scrollLockTimerRef.current) {
          clearTimeout(scrollLockTimerRef.current);
          scrollLockTimerRef.current = null;
        }
      }
    };

    // If user physically scrolls (wheel/touch), unlock immediately
    const handleUserInterrupt = () => {
      if (isScrollLockedRef.current) {
        isScrollLockedRef.current = false;
        if (scrollLockTimerRef.current) {
          clearTimeout(scrollLockTimerRef.current);
          scrollLockTimerRef.current = null;
        }
      }
    };

    window.addEventListener('scrollend', handleScrollEnd);
    window.addEventListener('wheel', handleUserInterrupt, { passive: true });
    window.addEventListener('touchstart', handleUserInterrupt, { passive: true });

    return () => {
      window.removeEventListener('scrollend', handleScrollEnd);
      window.removeEventListener('wheel', handleUserInterrupt);
      window.removeEventListener('touchstart', handleUserInterrupt);
      if (scrollLockTimerRef.current) {
        clearTimeout(scrollLockTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;

          // If currently locked by programmatic click navigation, do not overwrite
          if (isScrollLockedRef.current) return;

          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;

          // Top of page boundary: activate 'home'
          if (scrollY < 60) {
            setActiveSection(sectionIds[0] || 'home');
            return;
          }

          // Bottom of page boundary: activate last section (e.g. 'contact')
          if (windowHeight + scrollY >= documentHeight - 60) {
            setActiveSection(sectionIds[sectionIds.length - 1]);
            return;
          }

          // Dynamic header clearance calculation
          const navHeader = document.querySelector('.navbar-header');
          const headerHeight = navHeader ? navHeader.offsetHeight : 72;
          const triggerZone = headerHeight + Math.min(windowHeight * 0.35, 180);

          let currentSection = null;

          // Check sections in reverse document order (bottom to top):
          // The deepest section in the document whose top has crossed the trigger zone is the active one.
          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const id = sectionIds[i];
            const el = document.getElementById(id);
            if (!el) continue;

            const rect = el.getBoundingClientRect();

            // When section top is at or above the trigger zone
            if (rect.top <= triggerZone) {
              currentSection = id;
              break;
            }
          }

          if (currentSection) {
            setActiveSection(currentSection);
          }
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds, offset]);

  return { activeSection, setActiveSectionManual };
}
