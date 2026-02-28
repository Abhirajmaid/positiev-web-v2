'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// No scroll-driven animation on touch devices or when user prefers reduced motion
function useReducedMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    const touch = typeof window !== 'undefined' && 'ontouchstart' in window;
    const pref = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReduce(touch || pref);
  }, []);
  return reduce;
}

const finalStyle = {
  left1: { x: '10%', y: '-20%', rotate: -5 },
  left2: { x: '10%', y: '-20%', rotate: -5 },
  right1: { x: '-10%', y: '-20%', rotate: 5 },
  right2: { x: '-10%', y: '-20%', rotate: 5 },
};

export function SlideGallery() {
  const sectionRef = useRef(null);
  const noTouchAnimation = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Left images: x -100% → 10%, y 120% → -20%, rotate 0 → -5deg
  const left1X = useTransform(scrollYProgress, [0, 1], ['-100%', '10%']);
  const left1Y = useTransform(scrollYProgress, [0, 1], ['120%', '-20%']);
  const left1Rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  const left2X = useTransform(scrollYProgress, [0, 1], ['-100%', '10%']);
  const left2Y = useTransform(scrollYProgress, [0, 1], ['120%', '-20%']);
  const left2Rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Right images: x 100% → -10%, y 120% → -20%, rotate 0 → 5deg
  const right1X = useTransform(scrollYProgress, [0, 1], ['100%', '-10%']);
  const right1Y = useTransform(scrollYProgress, [0, 1], ['120%', '-20%']);
  const right1Rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const right2X = useTransform(scrollYProgress, [0, 1], ['100%', '-10%']);
  const right2Y = useTransform(scrollYProgress, [0, 1], ['120%', '-20%']);
  const right2Rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  return (
    <section
      ref={sectionRef}
      className={`relative z-20 w-full ${noTouchAnimation ? 'h-screen min-h-[500px]' : 'h-[300vh]'}`}
      aria-label="Gallery"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-neutral-100 px-[5vw] py-[4vh] md:px-[6vw] md:py-[5vh]">
        {/* Center: Lorem text — generous margin from images */}
        <p className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 max-w-[85%] text-center text-3xl font-semibold leading-tight text-neutral-700 md:text-5xl lg:text-6xl">
        “Why wait? Partner with us and unlock the next level of dealership performance.”
        </p>

        {/* Left 1: Bottom left, focus / larger foreground — show full image, no crop */}
        <motion.div
          className="absolute left-[1%] bottom-[3%] z-30 w-[min(400px,38vw)] aspect-[4/3] origin-center"
          style={
            noTouchAnimation
              ? { x: finalStyle.left1.x, y: finalStyle.left1.y, rotate: finalStyle.left1.rotate }
              : { x: left1X, y: left1Y, rotate: left1Rotate }
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/slide/left1.png"
              alt="Gallery left 1"
              fill
              sizes="(max-width: 768px) 80vw, 420px"
              className="object-contain -scale-x-100 "
              priority={false}
            />
          </div>
        </motion.div>

        {/* Left 2: Top left, smaller / background — clear gap from left1 */}
        <motion.div
          className="absolute left-[2%] top-[10%] z-20 w-[min(240px,32vw)] aspect-[4/3] origin-center"
          style={
            noTouchAnimation
              ? { x: finalStyle.left2.x, y: finalStyle.left2.y, rotate: finalStyle.left2.rotate }
              : { x: left2X, y: left2Y, rotate: left2Rotate }
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/slide/left2.png"
              alt="Gallery left 2"
              fill
              sizes="(max-width: 768px) 50vw, 260px"
              className="object-cover "
            />
          </div>
        </motion.div>

        {/* Right 1: Upper right, focus — good spacing from right2 */}
        <motion.div
          className="absolute right-[5%] top-[12%] z-30 w-[min(300px,36vw)] aspect-[4/3] origin-center"
          style={
            noTouchAnimation
              ? { x: finalStyle.right1.x, y: finalStyle.right1.y, rotate: finalStyle.right1.rotate }
              : { x: right1X, y: right1Y, rotate: right1Rotate }
          }
        >
          <div className="relative h-full w-full">
            <Image
              src="/images/slide/right1.png"
              alt="Gallery right 1"
              fill
              sizes="(max-width: 768px) 70vw, 340px"
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Right 2: Bottom right, deep background — clear gap from right1 */}
        <motion.div
          className="absolute right-[1%] bottom-[3%] z-10 w-[min(300px,30vw)] aspect-[4/3] origin-center"
          style={
            noTouchAnimation
              ? { x: finalStyle.right2.x, y: finalStyle.right2.y, rotate: finalStyle.right2.rotate }
              : { x: right2X, y: right2Y, rotate: right2Rotate }
          }
        >
          <div className="relative h-full w-full ">
            <Image
              src="/images/slide/right2.png"
              alt="Gallery right 2"
              fill
              sizes="(max-width: 768px) 48vw, 260px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}


