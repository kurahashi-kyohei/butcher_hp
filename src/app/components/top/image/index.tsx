import Style from './index.module.scss';
import NextImage from 'next/image';


const Image = () => {
  return (
    <div className={Style.img_wrapper}>
      <NextImage src='/top/schedule.jpg' alt='年末年始の営業日' className={Style.img} layout='fill' objectFit='contain'/>
    </div>
  )
}

export default Image;