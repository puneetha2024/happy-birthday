import { useOutletContext } from 'react-router-dom';

import Image from '../common/Image/Image';
import ImageAndText from '../common/ImageAndText/ImageAndText';
import Audio from '../common/Audio/Audio';
import importAll from '../../utils/importAll';
import './I.css';
import hth from './HighwayToHell.mp3';

export default function Contact() {
  const { isSidebarOpened } = useOutletContext();

  const images = importAll(require.context(`../images/I/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Audio audioSrc={hth} />

      <ImageAndText
        imgSrc={images['feb_1.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👉'
        text='Was it the first time, that I made you laugh a lot , and left a deep impression on you ?'
      />

      <Image imgSrc={images['example1.png']} isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example2.png']} widthValue='50%' isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example1.png']} isSidebarOpened={isSidebarOpened} />
      <Image imgSrc={images['example2.png']} widthValue='50%' isSidebarOpened={isSidebarOpened} />
    </>
  );
}
