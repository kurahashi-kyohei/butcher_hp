import Head from "next/head";
import { NextPage, Metadata } from "next";
import Mv from "../components/about/mv";
import Main from "../components/about/main";

export const metadata: Metadata = {
  title: "About | ブッチャー丸幸",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const About: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default About;
