import Head from "next/head";
import { NextPage, Metadata } from "next";
import Mv from "../components/access/mv";
import Main from "../components/access/main";

export const metadata: Metadata = {
  title: "Access | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const Accees: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default Accees;
