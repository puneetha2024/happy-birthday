import { useState } from 'react';

import './Image.css';

const Image = ({ imgSrc }) => {
  const [isBigImageShown, setIsBigImageShown] = useState(false);

  return (
    <>
      <div>
        <img className='image' src={imgSrc} alt='' onMouseUp={() => setIsBigImageShown(true)} />
      </div>
      {isBigImageShown && (
        <div className='divBigImage' onMouseUp={() => setIsBigImageShown(false)}>
          <img className='imgBigImage' src={imgSrc} alt='' />
        </div>
      )}
    </>
  );
};

export default Image;
