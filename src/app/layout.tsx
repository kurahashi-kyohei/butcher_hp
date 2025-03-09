import type { Metadata } from "next";
import '@/app/styles/scss/global/index.scss'
import { notojp } from "./styles/font";
import { ClientLayout } from '@/components/layouts/ClientLayout';

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | Official Web Site",
  description: "札幌市豊平区にある精肉店です。創業から50年以上の歴史があります。お肉の注文につきましてはhpをご覧ください。",
  icons: '/global/icon.svg'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={notojp.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
