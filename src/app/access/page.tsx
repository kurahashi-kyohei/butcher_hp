import { NextPage, Metadata } from "next";
import Mv from "../components/access/mv";
import Main from "../components/access/main";

export const metadata: Metadata = {
  title: "アクセス | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const Access: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default Access;