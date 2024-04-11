import Style from './index.module.scss';
import Image from 'next/image';

const Mv: React.FC = () => {
  return (
    <div id="mv" className={Style.mv}>
      <div className={Style.img_box}>
        <Image src='/top/mv/bg_1.webp' alt='メインビジュアル' layout='fill' objectFit='cover'/>
        <Image src='/top/mv/bg_2.webp' alt='メインビジュアル' layout='fill' objectFit='cover'/>
      </div>
      
    </div>
  )
}

export default Mv
