import React from 'react';
import Style from './index.module.scss';
import { mincho } from '@/app/styles/font';

const Mv: React.FC = () => {
  return (
    <div id="mv" className={Style.mv}>
      <div className={Style.img_box}>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Mv
