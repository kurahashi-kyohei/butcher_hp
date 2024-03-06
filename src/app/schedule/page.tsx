import { Metadata, NextPage } from "next";
import Mv from "../components/schedule/mv";

export const metadata: Metadata = {
  title: "Schedule | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const schedule: NextPage = () => {
  return (
    <div>
      <Mv />
    </div>
  )
}

export default schedule;
