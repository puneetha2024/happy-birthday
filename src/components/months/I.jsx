import { useOutletContext } from 'react-router-dom';

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
      <ImageAndText
        imgSrc={images['feb_2.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='So diplomatic! I was surprised at this answer. I would expect that one programmer just gave me a smile, which I normally always got.'
      />
      <ImageAndText
        imgSrc={images['feb_3.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🤔'
        text='Your way to speak, ... how many things can you not forget with ... ? But as I read it, I felt happy that someone noticed such small details'
      />
      <ImageAndText
        imgSrc={images['feb_4.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='💖'
        text='Understanding! This part is missed by a lot of people. Never missed by you! You try to understand other people, very nice character from you.
        Also you are capable to understand others.'
      />
      <ImageAndText
        imgSrc={images['feb_5.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😂'
        text='He was the source of our happiness! This message was very kind for me, cause you talked to me by using the way 
        how I talk normally. Happy Birthday! You will start a new journey'
      />
      <ImageAndText
        imgSrc={images['feb_6.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤦‍♂️'
        text='You are already 23 years old. How could you still have to check, about seasons ???'
      />
      <ImageAndText
        imgSrc={images['feb_7.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='👍'
        text='Another very smart reply!'
      />
      <ImageAndText
        imgSrc={images['feb_8.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😃'
        text='Please really try it in your private time, do not do it as a job. You know that I like reading. May I always be your first reader?'
      />
      <ImageAndText
        imgSrc={images['feb_9.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🛕'
        text='It doesn&rsquo;t matter, if you just said it or meant it. Let it die with me!'
      />
      <ImageAndText
        imgSrc={images['feb_10.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='💖'
        text='Again, used my way to give a nice joke. Funny and kind!'
      />
      <ImageAndText
        imgSrc={images['feb_11.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='🤬'
        text='The BIGGEST liar in the whole world. I believed it at that time. I just thought that this woman should be honest! But now I know the meanest mind is always behind the most beautiful look.'
      />
      <ImageAndText
        imgSrc={images['feb_12.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='😂'
        text='A ticket, how good you can think! You helped me to know the people. But actually I only wanted to see Puneetha Madam. Before it I just saw her profile photo. 
        She wears something in blue in one photo, and in red in another. In both photos she has a nice smile.'
      />
      <ImageAndText
        imgSrc={images['feb_13.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🥱'
        text='Na, sweet talker! Are all other people blind? Also in your POC? And the work are just done by themselves? 
        I am not in this &lsquo;sweet talk generation&rsquo;, but still I understood it.'
      />
      <ImageAndText
        imgSrc={images['feb_14.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤐'
        text='You are forbidden to talk to anyone now! You can start it after you know how to use the correct words!'
      />
      <ImageAndText
        imgSrc={images['feb_15.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤔'
        text='Just see my office? To think about another desk setup in your room?'
        imgSrc2={images['feb_16.png']}
        textPointer2='😏'
        text2='Aha, &lsquo;most importantly&rsquo;! How should I react in my mind? She is just curious? 
        I take a selfie? Never happened! Is this &lsquo;FLIRT&rsquo;?'
        imgSrc3={images['feb_17.png']}
        textPointer3='😊'
        text3='Continue to ask how I look ... Is my look so interesting? Are you in a Zoo? I already shared my profile photo with you!'
        imgSrc4={images['feb_18.png']}
        textPointer4='🤣'
        text4='The BEST could come later, but would never be missed!'
      />
      <ImageAndText
        imgSrc={images['feb_19.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Very smart reply! Changed to another topic smoothly. You own very good soft skills'
      />
      <ImageAndText
        imgSrc={images['feb_20.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙄'
        text='Oh okay, only he respects you, the others not? But how do you know the status of everyone?'
      />
      <ImageAndText
        imgSrc={images['feb_21.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['feb_22.png']}
        textPointer2='😉'
        text2='Hope this &lsquo;coolest&rsquo; will be only for me! Happy that you understand what I mean about goodbye mail.'
      />
      <ImageAndText
        imgSrc={images['feb_23.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Life is not only working. We can find more and more interesting things in the life, do them, enjoy them.'
        imgSrc2={images['feb_24.png']}
        textPointer2='👍'
        text2='See, you have also a lot of hobbies. You will a wonderful feeling by doing these! May I join ?'
      />
      <ImageAndText
        imgSrc={images['feb_25.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='Nice that we had so much fun with him! Happy that I can bring you to laugh again'
      />
      <ImageAndText
        imgSrc={images['feb_26.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['feb_27.png']}
        textPointer2='👏'
        text2='People can see your strength at work. You are very careful about every detail, but not a nerd. 
        Working for a company, we have to do more practice. Maybe doing a research in the college would let you feel more comfortable.'
      />
      <ImageAndText
        imgSrc={images['feb_30.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['feb_28.png']}
        imgSrc3={images['feb_29.png']}
        textPointer3='😏'
        text3='Camera... It doesn&rsquo;t only mean turning it on for me. But you are really the only one, who has troubled me so many times.'
      />
      <ImageAndText
        imgSrc={images['feb_31.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Ranking list, in the first month you have already won a special rule! Congratulation, GET!'
      />
      <ImageAndText
        imgSrc={images['feb_32.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Who said that we were friends already? Who defined it? But you just win my trust so easily.'
      />
      <ImageAndText
        imgSrc={images['feb_33.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🧐'
        text='Hey hey, do not go into too much details!'
      />
      <ImageAndText
        imgSrc={images['feb_34.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😳'
        text='Do you talk so sweet always? '
      />
      <ImageAndText
        imgSrc={images['feb_35.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😄'
        widthValue='50%'
        text='Do you have 2 nicknames, &lsquo;everyone&rsquo;, &lsquo;everybody&rsquo; ?'
      />
      <ImageAndText
        imgSrc={images['feb_36.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😡'
        text='Oh, you are so humble, really good character! How can people say that they know may, if they don&rsquo;t know every EBer?'
      />
      <ImageAndText
        imgSrc={images['feb_37.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😯'
        text='How good you can talk ???!!!'
      />
      <ImageAndText
        imgSrc={images['feb_38.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😨'
        text='Is this one really a GET not a CEO? Sounds like everything is under her control.'
      />
      <ImageAndText
        imgSrc={images['feb_39.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙏🏿'
        text='Nice talk again! Really, no one can beat you! You are talk queen!'
      />
      <ImageAndText
        imgSrc={images['feb_40.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😁'
        text='Do you want to be on the highway to be fired? Just take my advice!'
      />
      <ImageAndText
        imgSrc={images['feb_41.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['feb_42.png']}
        textPointer2='🛫'
        text2='I am on the way, will take some time, but will not miss!'
      />
    </>
  );
}
