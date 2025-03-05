'use client'
import { motion } from 'framer-motion';
import { slideUp } from './animation';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Landing() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Use a better preloading approach
  useEffect(() => {
    // Instead of creating a new element, work with the actual video element
    if (!videoRef.current) return;
    
    // Add event listeners directly to the video element
    const handleCanPlay = () => setIsVideoLoaded(true);
    const handleError = () => setVideoError(true);
    
    const videoElement = videoRef.current;
    videoElement.addEventListener('canplaythrough', handleCanPlay);
    videoElement.addEventListener('error', handleError);
    
    // Try to prevent caching issues by adding timestamp or setting headers
    // This can help avoid the ERR_CACHE_OPERATION_NOT_SUPPORTED error
    if (videoElement.src === '') {
      videoElement.src = `/videos/v2final.mp4?v=${Date.now()}`;
    }
    
    return () => {
      videoElement.removeEventListener('canplaythrough', handleCanPlay);
      videoElement.removeEventListener('error', handleError);
    };
  }, []);
  
  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className="relative flex h-screen overflow-hidden">
      <div className="absolute inset-0 bg-black">
        {!videoError && (
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className={`h-full w-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            onError={() => setVideoError(true)}
          />
        )}
      </div>
      
      {/* Show loading indicator until video is ready */}
      {!isVideoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-1/2 max-w-sm md:max-w-sm lg:max-w-md mx-auto">
          <Image
            src="/logos/White-Text-Logo.svg"
            alt="Logo"
            width={600}
            height={600}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </motion.main>
  );
}