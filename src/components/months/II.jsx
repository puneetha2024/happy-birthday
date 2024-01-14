import { useOutletContext } from 'react-router-dom';

import ImageAndText from '../common/ImageAndText/ImageAndText';
import Audio from '../common/Audio/Audio';
import importAll from '../../utils/importAll';
import mar from '../audios/Mar.mp3';

export default function March() {
  const { isSidebarOpened } = useOutletContext();

  const images = importAll(require.context(`../images/II/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Audio audioSrc={mar} />
      <ImageAndText
        imgSrc={images['mar_1.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_2.png']}
        textPointer2='👉'
        text2='Thank you for telling me that he is lair. And you have so much fun when you talk about this lair.'
      />
      <ImageAndText
        imgSrc={images['mar_3.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='You are shivering??? even quit??? I don&rsquo;t see any lizard there.'
      />
      <ImageAndText
        imgSrc={images['mar_4.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Did&rsquo;t know him before. But now I know you like his a lot of songs.'
        imgSrc2={images['mar_5.png']}
        imgSrc3={images['mar_6.png']}
        textPointer3='😉'
        text3='Yes, about friendship. In a relationship people could have more roles, friend is one of them.
        Take a look at the timestamp 😉. We started to leave messages in the evening.'
      />
      <ImageAndText
        imgSrc={images['mar_7.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_8.png']}
        textPointer2='😄'
        text2='Wow, you have voodoo. Didn&rsquo;t believe that it would be a point in the retro? Nothing is impossible, right?'
      />
      <ImageAndText
        imgSrc={images['mar_9.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='I know that you would like such a shit. Cause I also like it.'
      />
      <ImageAndText
        imgSrc={images['mar_10.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙂'
        text='You do not want to have sorry from some people. Fortunately I am also the one of these. It was
        just the beginning of March, you already didn&rsquo;t like it from me.'
      />
      <ImageAndText
        imgSrc={images['mar_11.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Bullshit should be cooked together. Only by one person, it would be lonely.'
      />
      <ImageAndText
        imgSrc={images['mar_12.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='The mother is correct. But maybe she also knows, that the real costly thing cannot be bought.'
      />
      <ImageAndText
        imgSrc={images['mar_13.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤔'
        widthValue='50%'
        text='About this, hhhmmm, maybe he deserved the laugh. Think about it, how much fun did you have already, from him ?'
        imgSrc2={images['mar_14.png']}
        textPointer2='😉'
        text2='The same issue, which could irritate us. If there could be another person with another interpretation, then it could just be funny. '
      />
      <ImageAndText
        imgSrc={images['mar_15.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤦‍♂️'
        text='Oh God, Camera topic! '
      />
      <ImageAndText
        imgSrc={images['mar_16.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤬'
        text='Is this really a GET? Challenge her Senior?'
        imgSrc2={images['mar_17.png']}
        textPointer2='😡'
        text2='Baby! See that? Your GET!!!'
      />
      <ImageAndText
        imgSrc={images['mar_18.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👏'
        widthValue='50%'
        text='Very professional! Friend and Reviewer'
      />
      <ImageAndText
        imgSrc={images['mar_19.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='A normal day, but a special day for us. The first time we started to talk on the weekend.'
      />
      <ImageAndText
        imgSrc={images['mar_20.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='2 Kid met each other, shared their kid games, were happy about their success and kept all as a T.'
      />
      <ImageAndText
        imgSrc={images['mar_21.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='This GET cannot stop challenge her senior and manager.'
      />
      <ImageAndText
        imgSrc={images['mar_22.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😥😒'
        text='2 kids are good friends. If one of them plays with other kids, another kid could feel sad and jealous'
      />
      <ImageAndText
        imgSrc={images['mar_23.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙄'
        text='Camera??? What happened on that day later? :-)'
        imgSrc2={images['mar_24.png']}
        textPointer2='💘'
        text2='One of the most important days for us! Do you still remember why you gave that GIF? happy, I love you? And You do not flirt ??? 
        As someone said it for the first time, he got how he could say it so easily. Then how could you send such a GIF so easily?'
      />
      <ImageAndText
        imgSrc={images['mar_25.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💖'
        text='We explained the meaning of our names. You showed your ambition, also told the meaning of the T. Will never forget about &lsquo;I am fat&rsquo;.'
      />
      <ImageAndText
        imgSrc={images['mar_26.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='Connection..., This is one magic between human. More or less between two people, it will happen. Between us, ...., it is built with our lives'
      />
      <ImageAndText
        imgSrc={images['mar_27.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='🛫'
        text='I have no idea where it is on the earth. But it should be somewhere in people&rsquo;s heart.'
        imgSrc2={images['mar_28.png']}
        widthValue2='50%'
        textPointer2='💘'
        text2='Can you let it be forever a heaven on earth? Please do not just say yes for now. F O R E V E R'
      />
      <ImageAndText
        imgSrc={images['mar_29.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💪'
        text='A BIG T'
        imgSrc2={images['mar_30.png']}
        widthValue2='50%'
        textPointer2='😉'
        text2='It was nice that you were impressed. Not for money, just to impress YOU! YOU are the point here.'
      />
      <ImageAndText
        imgSrc={images['mar_31.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😮'
        text='I just came online, only for someone. And got such a message. I thought that someone could see me.'
        imgSrc2={images['mar_32.png']}
        widthValue2='50%'
        imgSrc3={images['mar_34.png']}
        imgSrc4={images['mar_33.png']}
        widthValue4='50%'
        textPointer4='😉'
        text4='It was just a connection again. I came online for someone, someone wrote a message to me.
        It was true on that day, that the messages only from one person were checked.'
      />
      <ImageAndText
        imgSrc={images['mar_35.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='Before being kind, nice to others, be yourself at first. Do not lose yourself! The first rule.'
      />
      <ImageAndText
        imgSrc={images['mar_36.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😒'
        text='Thank you for telling me this and continue to call me SIR.'
      />
      <ImageAndText
        imgSrc={images['mar_37.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙄'
        text='Your respect is just Lalala? OK, redo your work!'
      />
      <ImageAndText
        imgSrc={images['mar_38.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😏'
        text='You are bold, pointed that you SENIOR&rsquo;s mistake.'
      />
      <ImageAndText
        imgSrc={images['mar_39.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😣'
        text='Unbelievable! From where to where??? And You already saw me, you were the ONLY one!'
      />
      <ImageAndText
        imgSrc={images['mar_40.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['mar_41.png']}
        widthValue2='50%'
        textPointer2='😋'
        text2='Is it necessary to be so honest to me?'
      />
      <ImageAndText
        imgSrc={images['mar_42.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_43.png']}
        widthValue2='50%'
        imgSrc3={images['mar_44.png']}
        widthValue3='50%'
        imgSrc4={images['mar_45.png']}
        widthValue4='50%'
        textPointer4='🎁'
        text4='That was my real thought about you. It is the same until now.
        In any hard time, just remember that the old man is there, he is watching your flying.'
      />
      <ImageAndText
        imgSrc={images['mar_46.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😡'
        text='Who are these friends???'
      />
      <ImageAndText
        imgSrc={images['mar_47.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['mar_48.png']}
        widthValue2='50%'
        textPointer2='😊'
        text2='Better than using this money to invite another ... , right?'
      />
      <ImageAndText
        imgSrc={images['mar_49.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_50.png']}
        textPointer2='😋'
        text2='Still think like this now? It was nice to see you all in the office, but don&rsquo;t want to see
        that others are around you.'
      />
      <ImageAndText
        imgSrc={images['mar_51.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_52.png']}
        textPointer2='🤗'
        text2='You have my words. Mostly I keep it very well, sometimes ... Okay, will improved it'
      />
      <ImageAndText
        imgSrc={images['mar_53.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Very smart answer. Camera should be the most important at that time. From anywhere to Camera!'
      />
      <ImageAndText
        imgSrc={images['mar_54.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        imgSrc2={images['mar_55.png']}
        widthValue2='40%'
        textPointer2='😂'
        text2='Your serious face... It looks like that this woman doesn&rsquo;t have food and sleep for more days.
        Please do not be serious anymore, just be yourself.'
      />
      <ImageAndText
        imgSrc={images['mar_56.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😅'
        text='No comment!'
      />
      <ImageAndText
        imgSrc={images['mar_57.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='This happens more times with different people. Only the people they have their connection, will hear it and be happy about it.'
      />
      <ImageAndText
        imgSrc={images['mar_58.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💖'
        text='Thank you for coming in the evening again and messaging me. Felt really happy about it.'
      />
      <ImageAndText
        imgSrc={images['mar_59.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['mar_60.png']}
        widthValue2='50%'
        textPointer2='💖'
        text2='You understand the adult world so exactly. It is not running away from this world, just you know how heavy it is.
        Here is another one with you to be a kid, you are not alone.'
        imgSrc3={images['mar_61.png']}
        textPointer3='😒'
        text3='That made me little sad. I hoped that someone really thinks age is only a number.'
      />
      <ImageAndText
        imgSrc={images['mar_62.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        imgSrc2={images['mar_63.png']}
        widthValue2='30%'
        textPointer2='🤦‍♂️'
        text2='You are sorry? Not necessary, you did not feel sorry at all. What is the number now?'
        imgSrc3={images['mar_64.png']}
        widthValue3='50%'
        textPointer3='🤨'
        text3='Well, the old man looks good. But it doesn&rsquo;t matter for you. Old man would be happy to hear
        that he looks good at least smart.'
      />
      <ImageAndText
        imgSrc={images['mar_65.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💘'
        text='Between friends, would people say it like that? Hey friend, you will forget me! Maybe! But
        the feeling should be very deep between them. Hhhmmm, a nice topic change in the talk, right ?'
      />
      <ImageAndText
        imgSrc={images['mar_69.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_70.png']}
        textPointer2='😥😅'
        text2='Cannot win the game with this stupid kid, cannot even start a fight with her.'
      />
      <ImageAndText
        imgSrc={images['mar_71.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Be careful about your code owner&rsquo;s private question!'
      />
      <ImageAndText
        imgSrc={images['mar_72.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😒'
        text='A nice joke! But Keep DISTANCE!'
      />
      <ImageAndText
        imgSrc={images['mar_73.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='Again, you understand the world very well. Keeping the kid-heart is pure beautiful for an adult. 
        How about this? In our world, be what you want to be, adult, kid, ... It doesn&rsquo;t matter, how old
        we are, just be who you want to be. With other people, decently.'
      />
      <ImageAndText
        imgSrc={images['mar_74.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😋'
        text='Oh, can you not say it easily, like this look is the man, which I dream every day?'
      />
      <ImageAndText
        imgSrc={images['mar_75.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='🤔'
        text='What was that GIF??? You talk to a male friend like this? so many pink hearts???'
      />
      <ImageAndText
        imgSrc={images['mar_76.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_77.png']}
        widthValue2='50%'
        textPointer2='💖'
        text2='The feeling is mutual. I learned this word from you. For me, it is not rare to meet someone like you,
        it is just impossible.'
      />
      <ImageAndText
        imgSrc={images['mar_78.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🤔'
        text='It was nice to read this message, cause it was for me. If I only think about this friend role, 
        hey, hey! Keep distance!'
      />
      <ImageAndText
        imgSrc={images['mar_79.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='💖'
        text='Keep your words! You promised on me! Do not let me wait too long please.'
      />
      <ImageAndText
        imgSrc={images['mar_80.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😋'
        text='I was not joking, young woman! You helped me by remote debugging. You deserved it in a retro.'
      />
      <ImageAndText
        imgSrc={images['mar_81.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='The best bullshit partner in the entire world!'
      />
      <ImageAndText
        imgSrc={images['mar_82.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤗'
        text='I was very happy, that someone wanted to keep me in the project, not because of project.'
      />
      <ImageAndText
        imgSrc={images['mar_83.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='The best bullshit couple come! '
      />
      <ImageAndText
        imgSrc={images['mar_84.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤨'
        text='3 men with only 1 woman, Oh! everyone loves you, right? I still remember that you had a photo,
        I said something like the most beautiful face from side. I looked it again and again.'
      />
      <ImageAndText
        imgSrc={images['mar_85.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤗'
        text='Win or lose, always relative, depends what people want. We both won, we were so happy to have such a friend.'
      />
      <ImageAndText
        imgSrc={images['mar_86.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        imgSrc2={images['mar_87.png']}
        widthValue2='40%'
        textPointer2='🙂'
        text2='We will meet, have food and have a walk. I have no idea, on which way we will walk, and how long.
        Would you mind, if I hold you hand and walk until the end of the world?'
      />
      <ImageAndText
        imgSrc={images['mar_88.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🧐'
        text='Still remember that day. Had a call with other person, then missed the calls with you, so much happiness
        in the calls, felt so free, peace by talking to you. At that moment I wanted to call you and to tell you &lsquo;I miss you&rsquo;.'
      />
      <ImageAndText
        imgSrc={images['mar_89.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤬'
        text='No one can beat you with your sweetness. Only you got time..., then another screenshot! How many photos do you have now?
        Do you need an extern disk?'
      />
      <ImageAndText
        imgSrc={images['mar_90.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😉'
        text='On the day, we had our second video call. Since that day, I have another name: old man .'
      />
      <ImageAndText
        imgSrc={images['mar_91.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_92.png']}
        textPointer2='💘'
        text2='This &lsquo;Thank you&rsquo; was from my heart. I still want to say &lsquo;Thank you&rsquo; for coming into my life.'
        imgSrc3={images['mar_93.png']}
        textPointer3='🤔'
        text3='Still have a lot to say? For SURE! You hide too much!'
      />
      <ImageAndText
        imgSrc={images['mar_94.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😏'
        text='Liked your reply, very funny, also sweet. Who will be the most happiest? Maybe we both!'
      />
      <ImageAndText
        imgSrc={images['mar_95.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='You got my thought :-) With time we see that you have more me, I have more you'
      />
      <ImageAndText
        imgSrc={images['mar_96.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👏'
        text='It is still true for me, will be your fan forever. Your character is amazing for me!'
      />
      <ImageAndText
        imgSrc={images['mar_97.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='Someone read the old messages and started to miss me on the weekend. Soon there would be no weekend for us.'
      />
      <ImageAndText
        imgSrc={images['mar_98.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😂'
        text='Oh, you explained me more times. I know, you wanted to show your best ..., but, but the message was true!'
        imgSrc2={images['mar_99.png']}
        textPointer2='👏'
        text2='Perfect reply!'
      />
      <ImageAndText
        imgSrc={images['mar_100.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='💖'
        text='My angel, this is exactly the 100th. screenshot in March, nice!'
      />
      <ImageAndText
        imgSrc={images['mar_101.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😄'
        text='Mostly from me? Then welcome to Germany, people will love your German!'
      />
      <ImageAndText
        imgSrc={images['mar_102.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙄'
        text='I don&rsquo;t worry, I knew that you would never tell me about it!'
        imgSrc2={images['mar_103.png']}
        textPointer2='😮'
        text2='That is the first step? Your voice was low for me, not like it from a young woman, but nice!'
      />
      <ImageAndText
        imgSrc={images['mar_104.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😒'
        text='I was proud of one screenshot, this devil has ...'
      />
      <ImageAndText
        imgSrc={images['mar_105.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🎁'
        text='You do it like what you say! You are a gift for me.'
      />
      <ImageAndText
        imgSrc={images['mar_106.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_107.png']}
        imgSrc3={images['mar_108.png']}
        widthValue3='70%'
        textPointer3='👏'
        text3='Still remember these 5 points? What would you say about these after almost one year? Hey, some can not be done in one year,
        they are for long time. From my side, You are on the way being fitter and fitter. 2-wheeler? Na, pickup-driver for family.
        program knowledge? Who had problem with negative margin, but can solve it now? who wrote the drive mode? The parents, fit like a horse, right?
        The old man is 43 now! I am proud of you! About master education, decide it after our meet please, ok? please!'
      />
      <ImageAndText
        imgSrc={images['mar_109.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👀'
        text='Respect or disrespect, is not something can be seen, it can only be felt. I believe you'
      />
      <ImageAndText
        imgSrc={images['mar_110.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😏'
        text='Ok Ok, very nice wish, my Kid'
      />
      <ImageAndText
        imgSrc={images['mar_111.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='👍'
        text='No, it is not bullshit. It is a feeling of love. Maybe we don&rsquo;t feel it most time.
        But we need this feeling as a big support in hard time. You had it from your mother, and you know
        this power.'
      />
      <ImageAndText
        imgSrc={images['mar_112.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='I am just happy that you have something, which can make you smile and laugh.
        Actually you also know how to make yourself happy, right?'
      />
      <ImageAndText
        imgSrc={images['mar_113.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='💪'
        text='Do not be afraid! You are strong! It should not be a pressure for you. I just know that
        you could fly higher, even 1cm is also higher.'
      />
      <ImageAndText
        imgSrc={images['mar_114.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        imgSrc2={images['mar_115.png']}
        widthValue2='85%'
        textPointer2='😉'
        text2='It sounded very sweet, to be remembered by other people. But I don&rsquo;t want! Like I always say,
        what the benefit for me it is? I want to live together! A photo on the wall? Not so soon!'
      />
      <ImageAndText
        imgSrc={images['mar_116.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👀'
        text='Oh pen-drive, all the screenshots, so proud of yourself, right?'
      />
      <ImageAndText
        imgSrc={images['mar_117.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😡'
        text='Yes, exact this red angry face, the biggest lair!'
      />
      <ImageAndText
        imgSrc={images['mar_118.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='🤬'
        text='What is this shit??? Yes, he will. But what about me?'
      />
      <ImageAndText
        imgSrc={images['mar_119.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        imgSrc2={images['mar_120.png']}
        widthValue2='85%'
        textPointer2='💖'
        text2='The feeling about the photo was very nice for me. The girl is in her own world, without being disturbed by playing 
        in the nature. You look exactly so quiet like a girl. Thank your parents for your angel face, and
        thank yourself for your peaceful heart.'
      />
      <ImageAndText
        imgSrc={images['mar_121.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😏'
        text='Make fun of me? And now? The power of ... affects you, you deserve it!'
      />
      <ImageAndText
        imgSrc={images['mar_122.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='😒'
        text='Na, troublemaker! It is so nice to ask me such a question???!!!'
      />
      <ImageAndText
        imgSrc={images['mar_123.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_125.png']}
        textPointer2='😄'
        text2='The story is still funny for me. But I don&rsquo;t make this mistake again, you devil!'
      />
      <ImageAndText
        imgSrc={images['mar_124.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='💖'
        text='Still just friend? Doesn&rsquo;t matter, I felt warm in my heart. But how could you say something like this to a friend????'
      />
      <ImageAndText
        imgSrc={images['mar_126.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😏'
        text='I might have a chance? Okay! Someone would kill me, if I would have a chance, not Dimmi.'
      />
      <ImageAndText
        imgSrc={images['mar_127.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💪'
        text='It was in March 2023, and now? Already feel revenge? There will be more!'
      />
      <ImageAndText
        imgSrc={images['mar_128.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='One of the best jokes from you, so nice!'
      />
      <ImageAndText
        imgSrc={images['mar_129.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😒'
        text='Done this with your friends, nice for you, you have a lot of friends, don&rsquo;t care about the shit old man.'
      />
      <ImageAndText
        imgSrc={images['mar_130.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='Tow kids are fight!'
      />
      <ImageAndText
        imgSrc={images['mar_131.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🤔'
        text='Still call me Liar? Still the whole team, except one person.'
      />
      <ImageAndText
        imgSrc={images['mar_132.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='Magic! Sometimes people are together for many years, but maybe they don&rsquo;t know each other at all.
        They just know the habit of each other. Thank you for coming again, I am in the most beautiful time in my life!'
      />
      <ImageAndText
        imgSrc={images['mar_133.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_134.png']}
        widthValue2='50%'
        textPointer2='🤔'
        text2='This shit woman hurt someone, make a wound on another person, and then put some salt on it just for fun!'
      />
      <ImageAndText
        imgSrc={images['mar_135.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='👍'
        text='Very nice, comparing with past. Now still think there is no growth in programming? Who understood props now good? Who is learning Hooks?'
      />
      <ImageAndText
        imgSrc={images['mar_136.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_137.png']}
        widthValue2='60%'
        textPointer2='😣'
        text2='Almost one year, we still can not solve this problem. Maybe we can never solve it.'
      />
      <ImageAndText
        imgSrc={images['mar_138.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='👍'
        text='Until you look like Schami, do not forget, &lsquo;being stronger&rsquo; itself is an action. No one can just sit and
        become stronger. If one day you forget that you are on the way of being stronger, just think that you do nothing, no worries, I will remind you!'
      />
      <ImageAndText
        imgSrc={images['mar_139.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😄'
        text='See? You also confirmed that I am normal, only you are crazy!'
      />
      <ImageAndText
        imgSrc={images['mar_140.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='The feeling is mutual, right? The connection comes with the feeling, I think.'
      />
      <ImageAndText
        imgSrc={images['mar_141.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='🤬'
        text='Weird? I think you do not want to have any pr throw!'
      />
      <ImageAndText
        imgSrc={images['mar_142.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['mar_143.png']}
        textPointer2='😊'
        text2='Yes, remember everything that woman speaks, only that woman!'
      />
      <ImageAndText
        imgSrc={images['mar_144.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='15%'
        textPointer='😡'
        text='WTF is this?'
      />
      <ImageAndText
        imgSrc={images['mar_145.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue2='70%'
        textPointer2='😉'
        text2='Too many reasons? You did not tell me any of them. And now I think you forgot the most. Could there be a reason, which calls &lsquo;like&rsquo;?'
      />
      <ImageAndText
        imgSrc={images['mar_146.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😉'
        text='Can you please control your time when you speak to a friend? With old man, you do not need, time machine will do it.'
      />
      <ImageAndText
        imgSrc={images['mar_147.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='😋'
        text='because of T? Or something changed from your inside ?'
      />
      <ImageAndText
        imgSrc={images['mar_148.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='20%'
        imgSrc2={images['mar_149.png']}
        textPointer2='😳'
        text2='You ask me to keep you as a friend, and no other should replace you, Oh, Oh, just friend. But how can a friend be replaced by another?'
      />
      <ImageAndText
        imgSrc={images['mar_150.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='💖'
        text='Remember this still?'
      />
      <ImageAndText
        imgSrc={images['mar_151.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🎈'
        text='We were happy that we met in the evening, now I can say, the time of our world begins!'
      />
      <ImageAndText
        imgSrc={images['mar_152.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['mar_153.png']}
        widthValue2='50%'
        textPointer2='😮'
        text2='On your last EB day? How many do you still remember and want to say?'
      />
      <ImageAndText
        imgSrc={images['mar_154.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🌷'
        text='This was proved several months later. Queen is the official name, another one is stupid citizen, 
        this guy reduced the number.'
      />
      <ImageAndText
        imgSrc={images['mar_155.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🪓'
        text='This last minute lady needed a scrum. Then old man wanted to be that scrum. And then this lady didn&rsquo;t 
        tell anything to the old man.'
      />
      <ImageAndText
        imgSrc={images['mar_156.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['mar_157.png']}
        widthValue2='30%'
        imgSrc3={images['mar_159.png']}
        widthValue3='30%'
        textPointer3='📚'
        text3='See? The old man can really be your scrum! Even being hated, he chooses to do the right thing.'
      />
      <ImageAndText
        imgSrc={images['mar_158.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='😐'
        text='Not that unbelievable! I had my goal, staying with the woman, letting woman know my status. And hoped
        that this woman could finish it early, then had a talk with me.'
      />
      <ImageAndText
        imgSrc={images['mar_160.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Now these two kids playing the hospital game. They do really like it, they play it until today.'
      />
      <ImageAndText
        imgSrc={images['mar_161.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🌹'
        text='Spoke so well!'
      />
      <ImageAndText
        imgSrc={images['mar_162.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤔'
        text='You just wanted to say that you are beautiful for me, I can not leave. Do you really think so??? Okay, it is true.'
      />
      <ImageAndText
        imgSrc={images['mar_163.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🥵'
        text='Okay, will be careful to your to-be-a-shit'
      />
    </>
  );
}
