import Style from './index.module.scss';
import NextImage from 'next/image';


const Image = () => {
  return (
    <div className={Style.img_wrapper}>
      <NextImage src='/top/schedule/2025-GW.webp' alt='GWの営業日' className={Style.img} layout='fill' objectFit='contain'/>
      <NextImage src='/top/schedule/2025-GW-sp.webp' alt='GWの営業日' className={Style.img_sp} layout='fill' objectFit='contain'/>
    </div>
  )
}

export default Image;