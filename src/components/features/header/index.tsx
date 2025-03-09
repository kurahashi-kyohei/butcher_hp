'use client';

import { useWindowSize } from '@/lib/hooks/useWindowSize';
import dynamic from 'next/dynamic';
import { useEffect, useState, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 動的インポートでヘッダーコンポーネントを遅延ロード
const HeaderPc = dynamic(() => import('@/app/components/layouts/header/header_pc'), {
  ssr: false
});
const HeaderSp = dynamic(() => import('@/app/components/layouts/header/header_sp'), {
  ssr: false
});

export const Header = memo(() => {
  const width = useWindowSize();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    // より自然なヘッダーの挙動
    const shouldShow = 
      currentScrollY < lastScrollY || // 上スクロール時
      currentScrollY < 100 || // ページ上部
      currentScrollY + window.innerHeight >= document.documentElement.scrollHeight; // ページ下部

    setIsVisible(shouldShow);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // 早期リターンで不要なレンダリングを防ぐ
  if (width === 0) return null;

  return (
    <AnimatePresence>
      <motion.header 
        className={`header ${isVisible ? 'visible' : 'hidden'}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 260,
          damping: 20
        }}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          backdropFilter: 'blur(8px)',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
        }}
      >
        {width > 1024 ? <HeaderPc /> : <HeaderSp />}
      </motion.header>
    </AnimatePresence>
  );
});

Header.displayName = 'Header'; 