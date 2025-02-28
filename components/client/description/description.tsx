import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';

export default function Description() {
    const phrase = "Horizon, the Techno-Cultural-Lit Fest of IGIT, Sarang, attracts over 5000 enthusiastic thinkers, fostering a welcoming environment to expand knowledge for societal benefit";
    const description = useRef<HTMLDivElement>(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className="px-20 mt-20 flex justify-center">
            <div className="max-w-[1400px] flex gap-12 relative">
                <p className="text-3xl text-brand gap-2 leading-[1.3]">
                    {phrase.split(" ").map((word, index) => (
                        <span key={index} className="relative overflow-hidden inline-flex">
                            <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index} className="mr-1">
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </p>
                <motion.p variants={opacity} animate={isInView ? "open" : "closed"} className="text-lg text-brand w-4/5 font-light">
                Horizon features technical workshops, artistic performances, and multidisciplinary contests, allowing students to network with industry experts, explore new technologies, and enhance their skills.
                </motion.p>
            </div>
        </div>
    );
}