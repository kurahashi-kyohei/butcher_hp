import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>ページが見つかりませんでした</p>
      <Link href="/">ホームへ戻る</Link>
    </main>
  );
}