import Image from '../Image/Image';
import './ImageAndText.css';

const ImageAndText = (props) => {
  return (
    <div className='imageTextContainer'>
      <Image imgSrc={props.imgSrc} isSidebarOpened={props.isSidebarOpened} />

      <div className='textUnderImage'>
        <span className='textPointer'>{props.textPointer}</span>
        <span>{props.text}</span>
      </div>
    </div>
  );
};

export default ImageAndText;
