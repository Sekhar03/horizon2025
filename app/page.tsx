'use client';
import Contact from '@/components/client/contact/contact';
import Description from '@/components/client/description/description';
import Events from '@/components/client/events/events';
import Landing from '@/components/client/landing/landing';
import Loader from '@/components/client/preloader/loader';
import SlidingImages from '@/components/client/slider/SlidingImages';
import Lanyard from '@/components/lanyard/lanyard';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      console.log('Setting isLoading to false');
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
  }, []);

  return (
    <main data-scroll-container>
      <AnimatePresence mode='wait'>
        {isLoading && <Loader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Events />
      <SlidingImages />
      <Contact />
      <Lanyard />
    </main>
  );
}