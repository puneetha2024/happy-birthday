import { useOutletContext } from 'react-router-dom';

import ImageAndText from '../common/ImageAndText/ImageAndText';
import Audio from '../common/Audio/Audio';
import importAll from '../../utils/importAll';
import feb from './Feb.mp3';

export default function March() {
  const { isSidebarOpened } = useOutletContext();

  const images = importAll(require.context(`../images/I/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Audio audioSrc={feb} />
      <ImageAndText
        imgSrc={images['feb_1.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👉'
        text='Was it the first time, that I made you laugh a lot , and left a deep impression on you ?'
      />
    </>
  );
}
