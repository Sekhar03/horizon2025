'use client';
import Description from '@/components/client/description/description';
import Events from '@/components/client/events/events';
import { Gallery } from '@/components/client/gallery/Gallery';
import Landing from '@/components/client/landing/landing';
import LanyardContainer from '@/components/client/LanyardContainer';
import Loader from '@/components/client/preloader/loader';
import { Testimonials } from '@/components/client/testimonial/testimonial';

import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload critical assets during this time
    const preloadVideo = () => {
      return new Promise((resolve, reject) => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.src = `/videos/v2final.mp4?v=${Date.now()}`; // Add cache buster
        video.oncanplaythrough = resolve;
        video.onerror = reject;
        
        // Set a timeout to prevent hanging on video load
        setTimeout(resolve, 3000); 
      });
    };

    // Try to preload the video, but continue after 2 seconds regardless
    Promise.race([
      preloadVideo(),
      new Promise(resolve => setTimeout(resolve, 2000))
    ]).finally(() => {
      console.log('Setting isLoading to false');
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <main data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Events />
      <Gallery />
      <Testimonials />
      {/* <Sponsors /> */}
      <LanyardContainer />
    </main>
  );
}