'use client';
import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import LogoSVG from './LogoSVG';

export default function LogoToCodePreloader({ showDuration = 4000 }) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [visible, setVisible] = useState(true);
  const [trigger, setTrigger] = useState(0); // لتجديد الـ preloader عند التنقل

  // إعادة تشغيل preloader عند تغيير المسار
  useEffect(() => {
    setVisible(true);
    setTrigger((prev) => prev + 1);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key={`preloader-${trigger}`} // المفتاح يتغير عند التنقل → يعيد الانيميشن
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          className={`fixed inset-0 z-[9999] flex items-center justify-center ${
            theme === 'dark' ? 'bg-[#11001f]' : 'bg-white'
          }`}
        >
          <LogoSVG
            size={180}
            onLoadingComplete={() => {
              // عند انتهاء الانيميشن، نخفي الـ preloader
              setVisible(false);
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
