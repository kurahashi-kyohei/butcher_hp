import Head from "next/head";
import { NextPage, Metadata } from "next";
import Mv from "../components/access/mv";
import Main from "../components/about/main";
import { Suspense } from "react";
import { useSearchParams } from 'next/navigation';

function Search() {
  const searchParams = useSearchParams();

  return <input placeholder="Search..." />;
}

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | 私たちについて",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const About: NextPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Mv />
      <Main />
    </Suspense>
  )
}

export default About;
