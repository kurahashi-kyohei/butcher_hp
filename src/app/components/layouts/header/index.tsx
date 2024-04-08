'use client';

import { useState, useEffect } from 'react';
import HeaderPc from './header_pc';
import HeaderSp from './header_sp';

const Header = () => {
  const [ua, setUa] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // 直接 window.innerWidth を参照するように変更
      setUa(window.innerWidth);
    };
    console.log('実行されました');

    // イベントリスナーを追加
    window.addEventListener('resize', handleResize, { passive: true });
    // 初期値を設定
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 依存配列は変更なし

  return (
    <>
      {ua > 1024 ? (
        <HeaderPc />
      ) : (
        <HeaderSp />
      )}
    </>
  );
};

export default Header;