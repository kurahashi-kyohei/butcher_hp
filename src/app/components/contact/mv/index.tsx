import Image from 'next/image';
import Style from './index.module.scss';
import { satisfy } from '@/app/styles/font';

const Mv = () => {
  return (
    <div className={Style.mv_container}>
      <div className={Style.mv}>
        <h2 className={satisfy.className}>Contact</h2>
        <div className={Style.arrow}>
         <Image src='/global/under_arrow.svg' alt='arrow' layout='fill' objectFit='contain'/>
        </div>
      </div>
      
    </div>
  )
}

export default Mv
