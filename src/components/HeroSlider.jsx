import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const arrow = {
  position: 'absolute', top: '50%', transform: 'translateY(-50%)', color: 'common.white',
  bgcolor: 'rgba(0, 0, 0, 0.35)', '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.55)' },
};

/**
 * Full-width slides that advance on their own. Pauses while hovered or focused, and
 * doesn't auto-advance for people who ask their system for reduced motion.
 */
export default function HeroSlider({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;
  const go = (step) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (paused || count < 2 || reduceMotion) return undefined;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(timer);
  }, [paused, count, interval]);

  return (
    <Box
      component="section"
      aria-roledescription="carousel"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      sx={{
        position: 'relative', overflow: 'hidden', bgcolor: 'grey.900',
        aspectRatio: { xs: '4 / 3', sm: '16 / 7', md: '400 / 130' },
      }}
    >
      {slides.map((slide, i) => (
        <Box
          key={slide.title}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${count}: ${slide.title}`}
          aria-hidden={i !== index}
          sx={{
            position: 'absolute', inset: 0, backgroundImage: `url("${slide.image}")`, backgroundSize: 'cover',
            backgroundPosition: 'center', opacity: i === index ? 1 : 0, transition: 'opacity 0.6s ease',
          }}
        >
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: { xs: '100%', md: '90%' }, p: 2.5, bgcolor: 'rgba(0, 0, 0, 0.5)', color: '#f1f1f1' }}>
            <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '1.75rem', md: '3rem' } }}>{slide.title}</Typography>
            <Typography>{slide.text}</Typography>
          </Box>
        </Box>
      ))}
      {count > 1 && (
        <>
          <IconButton aria-label="Previous slide" onClick={() => go(-1)} sx={{ ...arrow, left: 8 }}><ChevronLeftIcon /></IconButton>
          <IconButton aria-label="Next slide" onClick={() => go(1)} sx={{ ...arrow, right: 8 }}><ChevronRightIcon /></IconButton>
        </>
      )}
    </Box>
  );
}
