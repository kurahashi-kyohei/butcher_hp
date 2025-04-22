import Style from '@/app/styles/scss/module/top.module.scss';
import Mv from './components/top/mv';
import Image from './components/top/image';
import News from './components/top/news';
import Menu from './components/top/menu';
import Link from './components/top/link';
import Order from './components/top/order';
import Contact from './components/top/contact';
import Schedule from './components/top/schedule';
import Access from './components/top/access';

export default function Top() {
  return (
    <div className={Style.top}>
      <Mv />
      <Image />
      <News />
      <Menu />
      <Link />
      <Order />
      <Schedule />
      <Access />
      <Contact />
    </div>
  )
}