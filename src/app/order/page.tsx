import { Metadata, NextPage } from "next";
import Mv from "../components/order/mv";
import Main from "../components/order/main";

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | ご注文・ご予約",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const schedule: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default schedule;
