import Style from './index.module.scss';
import Image from "next/image";
import Link from "next/link";
import merchandises from "@/app/data/merchandises";

const MerchandisesContainer: React.FC<{ path: string }> = ({ path }) => {
  return (
    <div className={Style.container}>
      {merchandises.map((merchandise, index) => {
        return(
          (merchandise.href === path)
          ?
          <div className={Style.merchandise}>
            <Image className={Style.image} src={merchandise.image} alt={merchandise.title} width={350} height={300} />
            <div className={Style.text}>
              <h3>{merchandise.title}</h3>
              <h4>{merchandise.price}円 (税込)</h4>
              <div className={Style.desc} dangerouslySetInnerHTML={{ __html: merchandise.desc }}></div>
            </div>
          </div>
          :
          ''
        );
      })}
    </div>
  )
}

export default MerchandisesContainer;