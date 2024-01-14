import Image from '../Image/Image';
import './ImageAndText.css';

const ImageAndText = (props) => {
  return (
    <div className='imageTextContainer'>
      <Image imgSrc={props.imgSrc} isSidebarOpened={props.isSidebarOpened} widthValue={props.widthValue} />
      {!!props.text && (
        <div className='textUnderImage'>
          <span className='textPointer'>{props.textPointer}</span>
          <span>{props.text}</span>
        </div>
      )}
      {!!props.imgSrc2 && (
        <Image imgSrc={props.imgSrc2} isSidebarOpened={props.isSidebarOpened} widthValue={props.widthValue2} />
      )}
      {!!props.text2 && (
        <div className='textUnderImage'>
          <span className='textPointer'>{props.textPointer2}</span>
          <span>{props.text2}</span>
        </div>
      )}
      {!!props.imgSrc3 && (
        <Image imgSrc={props.imgSrc3} isSidebarOpened={props.isSidebarOpened} widthValue={props.widthValue3} />
      )}
      {!!props.text3 && (
        <div className='textUnderImage'>
          <span className='textPointer'>{props.textPointer3}</span>
          <span>{props.text3}</span>
        </div>
      )}
      {!!props.imgSrc4 && (
        <Image imgSrc={props.imgSrc4} isSidebarOpened={props.isSidebarOpened} widthValue={props.widthValue4} />
      )}
      {!!props.text4 && (
        <div className='textUnderImage'>
          <span className='textPointer'>{props.textPointer4}</span>
          <span>{props.text4}</span>
        </div>
      )}
    </div>
  );
};

export default ImageAndText;
