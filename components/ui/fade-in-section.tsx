"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  vertical?: boolean;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  ease?: "easeIn" | "easeOut" | "easeInOut" | "linear" | "circIn" | "circOut" | "backIn" | "backOut";
}

export default function FadeInSection({
  children,
  delay = 0.2,
  vertical = true,
  duration = 0.6,
  yOffset = 20,
  xOffset = 20,
  ease = 'easeOut',
}: FadeInSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return vertical ? (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: yOffset },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: ease },
        },
      }}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: xOffset },
        visible: {
          opacity: 1,
          x: 0,
          transition: { duration, delay, ease: ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
