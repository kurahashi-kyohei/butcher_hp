import { Metadata, NextPage } from "next";
import Mv from "../components/schedule/mv";
import Main from "../components/schedule/main";

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | スケジュール",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const schedule: NextPage = () => {
  return (
    <div>
      <Mv />
      <Main />
    </div>
  )
}

export default schedule;
