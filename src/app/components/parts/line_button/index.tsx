'use clinet';

import { useEffect, useState, useRef } from "react";
import Style from './index.module.scss';

const LineButton = () => {
  const [hasScript, setHasScript] = useState(false);
  const [isButtonLoaded, setIsButtonLoaded] = useState(false);

  const wrapper = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
      script.src =
        "https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js";
      script.async = true;
      script.defer = true;
      (wrapper.current as any).appendChild(script);
      setHasScript(true);
  }, []);

  useEffect(() => {
    const win = window as any;
    if (win.LineIt && hasScript && !isButtonLoaded) {
    win.LineIt.loadButton();
    setIsButtonLoaded(true);
    }
  }, [hasScript, isButtonLoaded]);

  return (
    <div ref={wrapper}>
      <div className="line-it-button" data-lang="ja" data-type="friend" data-env="REAL" data-count="true" data-home="true" data-lineId="@kura0418" style={{display: 'none'}}></div>
    </div>
  )
}

export default LineButton;
