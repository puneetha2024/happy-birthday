import { useState } from 'react';

import './Image.css';

const Image = ({ imgSrc }) => {
  const [isBigImageShown, setBigImageIsShown] = useState(false);

  return (
    <>
      <div>
        <img className='image' src={imgSrc} alt='' onMouseUp={() => setBigImageIsShown(true)} />
      </div>
      {isBigImageShown && (
        <div className='divBigImage' onMouseUp={() => setBigImageIsShown(false)}>
          <img className='imgBigImage' src={imgSrc} alt='' />
        </div>
      )}
    </>
  );
};

export default Image;
