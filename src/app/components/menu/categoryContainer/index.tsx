import Style from './index.module.scss';
import Image from "next/image";
import Link from "next/link";
import merchandises from "@/app/data/merchandises";

const CategoryContainer: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className={Style.categories}>
      <h3>商品一覧</h3>
      <div className={Style.merchandises}>
      {merchandises.map((merchandise, index) => {
        return(
          (`/menu/${merchandise.category}` === path)
          ?
          <Link key={index} href={merchandise.href} className={Style.merchandise}>
            <Image src={merchandise.image} alt={merchandise.title} width={150} height={150}/>
            <div className={Style.desc}>
              <p>{merchandise.title}</p>
              <p>{merchandise.price}円（税込）</p>
            </div>
          </Link>
          :
          ''
        );
      })}
      </div>
    </div>
  )
}

export default CategoryContainer;