import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <nav className="container mx-3 flex justify-between items-center">
        <Link href="/" className="flex gap-1">
          <img src="../public/icon.svg" alt="アイコン" />
          <div className="text-lg font-bold">ブッチャー丸幸</div>
        </Link>
        <div className="flex gap-4">
          <Link href="/">
            <span className="hover:text-gray-300">トップページ</span>
          </Link>
          <Link href="/products">
            <span className="hover:text-gray-300">商品メニュー</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-gray-300">お問い合わせ</span>
          </Link>
          <Link href="/access">
            <span className="hover:text-gray-300">アクセス</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
