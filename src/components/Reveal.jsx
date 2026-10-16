import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';

/** Fades its children in as they scroll into view. Replaces wow.js and animate.css. */
export default function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  // Without IntersectionObserver (old browsers, tests) everything is simply shown.
  const [shown, setShown] = useState(() => typeof IntersectionObserver === 'undefined');

  useEffect(() => {
    if (shown || !ref.current) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShown(true);
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -40px 0px' });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <Box
      ref={ref}
      sx={{
        height: '100%', // so cards inside can fill their grid cell and line up
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', transform: 'none' },
      }}
    >
      {children}
    </Box>
  );
}
