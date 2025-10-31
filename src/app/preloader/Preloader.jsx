'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { assets } from '../../../assets/assets'; // ← غيّر المسار حسب مكان اللوجو

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 2200); // مدة الأنيميشن
    return () => clearTimeout(timeout);
  }, [pathname]); // ← كده الـ preloader هيشتغل عند كل تغيير في الصفحة

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 flex items-center justify-center z-[9999]
                     bg-white dark:bg-[#11001f] transition-colors duration-700"
        >
          {/* اللوجو نفسه */}
          <motion.div
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              rotate: [0, 360],
              opacity: [0, 1],
            }}
            transition={{
              duration: 1.8,
              ease: 'easeInOut',
            }}
          >
            <Image
              src={assets.logo_usry_icon}
              alt="Usry Logo"
              width={160}
              height={160}
              priority
              className="drop-shadow-[0_0_10px_#ada1f9]"
            />
          </motion.div>

          {/* تأثير ظهور كود فعلي بعد اللوجو */}
          <motion.pre
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="absolute bottom-10 text-[#ada1f9] font-mono text-xs md:text-sm text-center"
          >
            {`const UsryLogo = () => <motion.div animate={{ rotate: 360 }} />;`}
          </motion.pre>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
