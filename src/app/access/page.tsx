import { NextPage, Metadata } from "next";
import Mv from "../components/access/mv";
import Main from "../components/access/main";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | アクセス",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const Access: NextPage = () => {
  return (
    <Suspense>
      <Mv />
      <Main />
    </Suspense>
  )
}

export default Access;