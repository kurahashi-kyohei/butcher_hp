import { NextPage, Metadata } from 'next';
import Mv from '../components/contact/mv';
import Main from '../components/contact/main';

export const metadata: Metadata = {
  title: "ブッチャー丸幸 | お問い合わせ",
  description: "北海道札幌市豊平区にある精肉店です。",
};

const Contact: NextPage = () => {
  return (
    <>
      <Mv />
      <Main />
    </>
  )
}

export default Contact;
