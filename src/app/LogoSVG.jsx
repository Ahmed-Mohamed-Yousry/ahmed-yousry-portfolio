'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LogoSVG({ size = 160, onLoadingComplete }) {
  const [phase, setPhase] = useState('drawing'); // drawing -> filling -> pause -> rotate -> complete
  const primary = '#ada1f9';

  useEffect(() => {
    const sequence = async () => {
      // 1️⃣ رسم الخطوط
      await new Promise(r => setTimeout(r, 2500));
      setPhase('filling');

      // 2️⃣ التلوين الداخلي
      await new Promise(r => setTimeout(r, 800));
      setPhase('pause');

      // 3️⃣ توقف قصير قبل الدوران النهائي
      await new Promise(r => setTimeout(r, 500));
      setPhase('rotate');

      // 4️⃣ دوران الشعار
      await new Promise(r => setTimeout(r, 1600));
      setPhase('complete');

      // 5️⃣ انتهاء التحريك → نبلغ المكون الأب
      onLoadingComplete?.();
    };

    sequence();
  }, [onLoadingComplete]);

  // رسم اللوجو تدريجيًا
  const drawVariants = {
    hidden: (i) => ({ pathLength: 0, opacity: 0 }),
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.5, duration: 1, ease: 'easeOut' },
        opacity: { delay: i * 0.5, duration: 0.3 },
      },
    }),
  };

  // تلوين داخلي
  const fillVariants = {
    drawing: { fill: 'transparent' },
    filling: { fill: primary, transition: { duration: 0.8 } },
    pause: { fill: primary },
    rotate: { fill: primary },
    complete: { fill: primary },
  };

  return (
    <motion.div
      style={{ width: size, height: (size * 171) / 161, transformOrigin: 'center center' }}
      animate={phase === 'rotate' ? { rotate: 360 } : {}}
      transition={phase === 'rotate' ? { duration: 1.6, ease: 'easeInOut' } : {}}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161 171" width="100%" height="100%">
        {/* الجزء الأول */}
        <motion.path
          d="M78 6 L75 6 L72 10 L56 54 L51 59 L4 83 L5 88 L39 103 L44 103 L75 78 L98 63 L97 54 Z"
          stroke={primary}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          variants={drawVariants}
          initial="hidden"
          animate={phase === 'drawing' ? 'visible' : 'hidden'}
          custom={0}
        />
        <motion.path
          d="M78 6 L75 6 L72 10 L56 54 L51 59 L4 83 L5 88 L39 103 L44 103 L75 78 L98 63 L97 54 Z"
          variants={fillVariants}
          initial="drawing"
          animate={phase}
        />

        {/* الجزء الثاني */}
        <motion.path
          d="M148 81 L108 71 L95 80 L77 98 L61 119 L61 125 L76 162 L81 162 L101 112 L148 88 Z"
          stroke={primary}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="transparent"
          variants={drawVariants}
          initial="hidden"
          animate={phase === 'drawing' ? 'visible' : 'hidden'}
          custom={1}
        />
        <motion.path
          d="M148 81 L108 71 L95 80 L77 98 L61 119 L61 125 L76 162 L81 162 L101 112 L148 88 Z"
          variants={fillVariants}
          initial="drawing"
          animate={phase}
        />

        {/* النجمة */}
        <motion.g>
          <motion.path
            d="M126 11 L121 25 L114 31 L103 33 L102 36 L115 40 L122 47 L126 60 L129 60 L133 47 L140 40 L150 38 L153 35 L138 29 L132 22 L129 11 Z"
            stroke={primary}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="transparent"
            variants={drawVariants}
            initial="hidden"
            animate={phase === 'drawing' ? 'visible' : 'hidden'}
            custom={2}
          />
          <motion.path
            d="M126 11 L121 25 L114 31 L103 33 L102 36 L115 40 L122 47 L126 60 L129 60 L133 47 L140 40 L150 38 L153 35 L138 29 L132 22 L129 11 Z"
            variants={fillVariants}
            initial="drawing"
            animate={phase}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
