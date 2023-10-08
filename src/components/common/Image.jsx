import { useState } from 'react';

const Image = ({ imgSrc }) => {
  const [isBigImageShown, setBigImageIsShown] = useState(false);

  return (
    <>
      <div className='image'>
        <img src={imgSrc} alt='' onMouseUp={() => setBigImageIsShown(true)} />
      </div>
      {isBigImageShown && (
        <div className='divBig' onMouseUp={() => setBigImageIsShown(false)}>
          <img className='imgBig' alt='' src={imgSrc} />
        </div>
      )}
    </>
  );
};

export default Image;
