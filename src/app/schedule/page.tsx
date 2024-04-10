import { Metadata, NextPage } from "next";
import Mv from "../components/schedule/mv";
import Main from "../components/schedule/main";
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';


function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | スケジュール",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const schedule: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mv />
      <Main />
    </Suspense>
  )
}

export default schedule;
