import { useState } from 'react';

import './Image.css';

const Image = (props) => {
  const [isBigImageShown, setIsBigImageShown] = useState(false);

  return (
    <>
      <div>
        <img className='image' src={props.imgSrc} alt='' onMouseUp={() => setIsBigImageShown(true)} />
      </div>
      {isBigImageShown && !props.isSidebarOpened && (
        <div className='divBigImage' onMouseUp={() => setIsBigImageShown(false)}>
          <img className='imgBigImage' src={props.imgSrc} alt='' />
        </div>
      )}
    </>
  );
};

export default Image;
