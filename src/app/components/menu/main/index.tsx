import Style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import merchandises from '@/app/data/merchandises';
import categories from '@/app/data/category';

const Main: React.FC = () => {
  return (
    <div className={Style.main}>
      <div className={Style.all}>
        <h3>商品一覧</h3>
        <div className={Style.merchandises}>
          {merchandises.map((merchandise, index) => {
            return(
              <Link key={index} href={merchandise.href} className={Style.merchandise}>
                <div className={Style.img_wrapper}>
                  <Image src={merchandise.image} alt={merchandise.title} layout='fill' objectFit='cover'/>
                </div>
                <div className={Style.desc}>
                  <p>{merchandise.title}</p>
                  <p>{merchandise.price}円（税込）</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={Style.category_wrapper}>
        <h3>カテゴリー別</h3>
        <div className={Style.categories}>
          {categories.map((category, index) => {
            return (
              <Link key={index} href={category.href} className={Style.category}>
                <div className={Style.img_wrapper}>
                  <Image src={category.image} alt={category.title} layout='fill' objectFit='cover'/>
                </div>
                <h4>{category.title}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Main
