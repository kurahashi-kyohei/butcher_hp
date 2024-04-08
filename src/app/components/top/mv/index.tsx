import React from 'react';
import Style from './index.module.scss';

const Mv: React.FC = () => {
  return (
    <div id="mv" className={Style.mv}>
      
      <div className={Style.img_box}>
        <h2>創業から半世紀以上<br />変わらぬ愛される味を<br />これからも守り続けて< br className={Style.sp_only}/>いきます。</h2>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Mv
