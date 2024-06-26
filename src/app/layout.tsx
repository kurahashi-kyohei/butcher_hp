import type { Metadata } from "next";
import '@/app/styles/scss/global/index.scss'
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";
import { notojp } from "./styles/font";
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | Official Web Site",
  description: "札幌市豊平区にある精肉店です。創業から50年以上の歴史があります。お肉の注文につきましてはhpをご覧ください。",
  icons: '/global/icon.svg'
};

function SearchBarFallback() {
  return <>placeholder</>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <html lang="ja">
        <body className={notojp.className}>
          <Suspense fallback={<SearchBarFallback />}>
            <Header />
          </Suspense>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
