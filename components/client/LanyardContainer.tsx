import { useRouter } from "next/navigation";
import Hyperspeed from "../style/illusion";
import { AspectRatio } from "../ui/aspect-ratio";
import { useEffect, useState } from "react";

const LanyardContainer = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  
  // Ensure component is mounted before rendering the 3D content
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  const navigate = () => {
    router.push("https://konfhub.com/c2d23ee1-d06e-4fa9-a5e0-b820a1470a84");
  };

  return (
    <div className="relative w-full min-h-[50vh] flex items-center justify-center px-4 py-8 md:py-12">
      {/* Fixed width container with max-width for responsiveness */}
      <div className="w-full max-w-[1000px] relative">
        {/* The AspectRatio with Hyperspeed inside */}
        <AspectRatio 
          ratio={16 / 9} 
          className="overflow-hidden rounded-lg shadow-2xl bg-black relative"
        >
          {/* Add a container div that takes full space and centers content */}
          <div className="absolute inset-0 flex items-center justify-center">
            {isMounted && (
              <div className="w-full h-full object-fill justify-left">
                <Hyperspeed 
                  effectOptions={{
                    onSpeedUp: () => { },
                    onSlowDown: () => { },
                    distortion: 'turbulentDistortion',
                    length: 400,
                    roadWidth: 10,
                    islandWidth: 2,
                    lanesPerRoad: 4,
                    fov: 90,
                    fovSpeedUp: 150,
                    speedUp: 2,
                    carLightsFade: 0.4,
                    totalSideLightSticks: 20,
                    lightPairsPerRoadWay: 40,
                    shoulderLinesWidthPercentage: 0.05,
                    brokenLinesWidthPercentage: 0.1,
                    brokenLinesLengthPercentage: 0.5,
                    lightStickWidth: [0.12, 0.5],
                    lightStickHeight: [1.3, 1.7],
                    movingAwaySpeed: [60, 80],
                    movingCloserSpeed: [-120, -160],
                    carLightsLength: [400 * 0.03, 400 * 0.2],
                    carLightsRadius: [0.05, 0.14],
                    carWidthPercentage: [0.3, 0.5],
                    carShiftX: [-0.8, 0.8],
                    carFloorSeparation: [0, 5],
                    colors: {
                      roadColor: 0x080808,
                      islandColor: 0x0a0a0a,
                      background: 0x000000,
                      shoulderLines: 0xFFFFFF,
                      brokenLines: 0xFFFFFF,
                      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                      sticks: 0x03B3C3,
                    }
                  }}
                />
              </div>
            )}
          </div>
          
          {/* Overlay clickable button - absolutely positioned within the AspectRatio */}
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
          >
            <div className="text-center px-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                GRAB YOUR PASS
              </h2>
              <button onClick={navigate} className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors duration-300 shadow-lg font-medium">
                Register Now
              </button>
            </div>
          </div>
        </AspectRatio>
      </div>
    </div>
  );
};

export default LanyardContainer;