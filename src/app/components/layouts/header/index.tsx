'use client';

import { useState, useEffect } from 'react';
import HeaderPc from './header_pc';
import HeaderSp from './header_sp';
import { useCallback } from 'react';

const Header = () => {
  const [ua, setUa] = useState(0);

  // handleResizeをuseCallbackでメモ化
  const handleResize = useCallback(() => {
    // throttleを実装して頻繁な更新を防ぐ
    const width = window.innerWidth;
    if (Math.abs(width - ua) > 100) { // 100px以上の変化がある場合のみ更新
      setUa(width);
    }
  }, [ua]);

  useEffect(() => {
    // ResizeObserverを使用してよりパフォーマンスの良いリサイズ検知
    const observer = new ResizeObserver(handleResize);
    observer.observe(document.documentElement);
    handleResize();

    return () => observer.disconnect();
  }, [handleResize]);

  // 早期リターンでレンダリングを最適化
  if (ua === 0) return null;

  return (
    <>
      {ua > 1024 ? <HeaderPc /> : <HeaderSp />}
    </>
  );
};

export default Header;