'use client';
import { useState, useEffect, useRef } from 'react';
import Event from './components/lo';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import RoundedButton from '@/components/global/RoundedButton';

const events = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000"
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C"
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3"
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63"
  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Events() {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const cursorLabel = useRef<HTMLDivElement>(null);

  const xMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const yMoveContainer = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursor = useRef<gsap.QuickToFunc | null>(null);
  const xMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);
  const yMoveCursorLabel = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    // Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" });
    // Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" });
    // Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" });
  }, []);

  const moveItems = (x: number, y: number) => {
    xMoveContainer.current!(x);
    yMoveContainer.current!(y);
    xMoveCursor.current!(x);
    yMoveCursor.current!(y);
    xMoveCursorLabel.current!(x);
    yMoveCursorLabel.current!(y);
  }

  const manageModal = (active: boolean, index: number, x: number, y: number) => {
    moveItems(x, y);
    setModal({ active, index });
  }

  return (
    <main onMouseMove={(e) => { moveItems(e.clientX, e.clientY) }} className="flex flex-col items-center mt-24 px-20">
      <div className="max-w-[1400px] w-full flex flex-col items-center justify-center mb-24">
        {events.map((event, index) => (
          <Event index={index} title={event.title} manageModal={manageModal} key={index} />
        ))}
      </div>
      <RoundedButton>
        <p>More work</p>
      </RoundedButton>
      <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className="fixed top-1/2 left-1/2 w-[400px] h-[350px] bg-white pointer-events-none overflow-hidden z-30">
          <div style={{ top: index * -100 + "%" }} className="relative w-full h-full transition-top duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
            {events.map((event, index) => (
              <div className="flex items-center justify-center w-full h-full" style={{ backgroundColor: event.color }} key={`modal_${index}`}>
                <Image src={`/images/${event.src}`} width={300} height={0} alt="image" />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div ref={cursor} className="fixed w-20 h-20 bg-[#455CE9] text-white rounded-full flex items-center justify-center z-30 pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className="fixed w-20 h-20 text-white rounded-full flex items-center justify-center z-30 pointer-events-none" variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
      </>
    </main>
  )
}