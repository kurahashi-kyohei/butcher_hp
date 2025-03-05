import Style from './index.module.scss';
import { merchandises } from '@/app/data/merchandises';
import categories from '@/app/data/category';
import Link from 'next/link';


export default function CategoryContainer({ path }: { path: string }) {
  return (
    <div className={Style.categories}>
      {categories.map((category, index) => {
        return(
          (category.href === path) 
          ? 
          <h3 key={index}>{category.title}</h3> 
          : ''
        )
      })}
      <div className={Style.merchandises}>
        {merchandises.map((merchandise, index) => {
          return(
            (merchandise.category === path)
            ?
            <div key={index} className={Style.merchandise}>
              <div className={Style.title} dangerouslySetInnerHTML={{ __html: merchandise.title }}></div>
              <p className={Style.price}>{merchandise.price}円（税込）</p>
            </div>
            : ''
          );
        })}
      </div>
      <div className={Style.note}>
        <p>※ 3000円以上ご購入の方 鶏皮味付き 1pサービス致します。</p>
        <p>※ 上記の価格は、税込価格です。</p>
        <p>※肉相場変動により価格がたまに変わります</p>
      </div>
      <Link href="/menu" className={Style.button}>
        <span>メニュー一覧へ</span>
      </Link>
    </div>
  )
}

// export async function generateStaticParams() {
//   return categories.map((category) => ({
//     id: category.href,
//   }));
// }