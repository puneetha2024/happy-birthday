import { useOutletContext } from 'react-router-dom';

import ImageAndText from '../common/ImageAndText/ImageAndText';
import Audio from '../common/Audio/Audio';
import importAll from '../../utils/importAll';
import may from '../audios/May.mp3';

export default function May() {
  const { isSidebarOpened } = useOutletContext();

  const images = importAll(require.context(`../images/IV/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Audio audioSrc={may} />
      <ImageAndText
        imgSrc={images['may_1.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👏'
        text='This woman did not leave her rudeness in her vacation.'
      />
      <ImageAndText
        imgSrc={images['may_2.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😒'
        text='I am so proud of me, that I can share my look with bullshit.'
      />
      <ImageAndText
        imgSrc={images['may_3.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='I know you know it. But still want to say it to you, let you hear it from me.'
      />
      <ImageAndText
        imgSrc={images['may_4.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🤬'
        text='Because she is not!!! Idiot, you know who my lover is!'
      />
      <ImageAndText
        imgSrc={images['may_5.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='🤬'
        text='You understand me like what you want, and then be proud of yourself that you can make fun of me.'
      />
      <ImageAndText
        imgSrc={images['may_6.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😍'
        text='I did&rsquo;t lie. Kid is the most beautiful woman for me.'
      />
      <ImageAndText
        imgSrc={images['may_7.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😉'
        text='How about making fun with this old kid for always, not only sometimes?'
      />
      <ImageAndText
        imgSrc={images['may_8.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='😄'
        text='This was one classic conversation between us.'
      />
      <ImageAndText
        imgSrc={images['may_9.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='I am honoured to have the name in you heart, with your parents :-) Yes you can believe it, it 
        doesn&rsquo;t, will love you the same like them. About why, hehe, you know it. Just accept it, 
        do not be angry on yourself. '
      />
      <ImageAndText
        imgSrc={images['may_10.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='35%'
        imgSrc2={images['may_11.png']}
        widthValue2='75%'
        textPointer2='😄'
        text2='Oh, rudeness is really the nature. But ok, I will print it out and hang it on the wall for some days.
        And what is this for a comparison???'
      />
      <ImageAndText
        imgSrc={images['may_12.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤔'
        text='You defined the relationship here so well, have no words.'
      />
      <ImageAndText
        imgSrc={images['may_13.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😉'
        text='The feeling is in your control? OK, then control to feel chips are so sweet, ice cream is so salty.'
      />
      <ImageAndText
        imgSrc={images['may_14.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='45%'
        textPointer='👍'
        text='I am always proud of your hard-working. Love you as much as my lover? Yes or no, depends on whom you think my lover is.'
      />
      <ImageAndText
        imgSrc={images['may_15.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='I am also sure, that you live in your imaginary world so well, that you do not want to see the real world.'
      />
      <ImageAndText
        imgSrc={images['may_16.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='What is this for a shit? Comparing the duration of the call, no one can beat you!'
      />
      <ImageAndText
        imgSrc={images['may_17.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💘'
        text='Cannot stop? Should not stop!'
      />
      <ImageAndText
        imgSrc={images['may_18.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🥵'
        text='Already HUSBAND ???'
      />
      <ImageAndText
        imgSrc={images['may_19.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😭'
        text='Na, good, no one likes losing, but sometimes have to accept the hard reality.'
      />
      <ImageAndText
        imgSrc={images['may_20.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='😉'
        text='Still thinking the same? Well, I think, it is mostly beautiful, sometimes tough.
        But I don&rsquo;t that he is poor. He has experienced something beautiful before,
        just at that time he had a bad time.'
      />
      <ImageAndText
        imgSrc={images['may_21.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😘'
        text='Do you save that video? I could remember it so clearly still. Was a beautiful day!'
      />
      <ImageAndText
        imgSrc={images['may_22.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙄'
        text='I am so honest to you, what I got back from you is being teased!'
      />
      <ImageAndText
        imgSrc={images['may_23.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙄'
        text='How nice a wish could be'
      />
      <ImageAndText
        imgSrc={images['may_24.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😁'
        text='We made rules, then we broke them. We made new rules, we accepted them, and broke them again, ...'
      />
      <ImageAndText
        imgSrc={images['may_25.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🙂'
        text='This stubborn kid keeps what she said, never stop irritating me, making me angry, and being rude to me ALWAYS.
        The old man loves this kid like ALWAYS.'
      />
      <ImageAndText
        imgSrc={images['may_26.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😙'
        text='Fishes happy makes you also happy, right? You did something for them, so that they
        can live better. I was happy that you would like to do such small things for others.'
      />
      <ImageAndText
        imgSrc={images['may_27.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😕'
        text='I read this messages more than 3 times, to understand wether this woman felt sorry. 
        Finally I understood! She was happy!'
      />
      <ImageAndText
        imgSrc={images['may_28.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😛'
        text='It was because the kid didn&rsquo;t want to keep the time to go to bed. Old man was there
        the whole time, just didn&rsquo;t click the message. After the kid really went to bed,
        the old man came replying messages :-) '
      />
      <ImageAndText
        imgSrc={images['may_29.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😯'
        text='Is this woman&rsquo;s second job KILLER?'
      />
      <ImageAndText
        imgSrc={images['may_30.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['may_31.png']}
        widthValue2='40%'
        textPointer2='😞'
        text2='If I could be asked for the feedback about your rudeness, then I would give five stars.'
      />
      <ImageAndText
        imgSrc={images['may_32.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Oh, we all know know where this pendrive is, right? Missing! Cannot stop laughing.
        I can remember how much you were proud of this pendrive. Na good, you have all in your mind,
        just close your eyes, you will see all.'
        imgSrc2={images['may_33.png']}
        textPointer2='😯'
        text2='Maybe a new search after so many months, maybe you will find it ? '
      />
      <ImageAndText
        imgSrc={images['may_34.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👏'
        text='If one day you cannot keep this balance, no worries. I will be there to remind you.'
      />
      <ImageAndText
        imgSrc={images['may_35.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😕'
        text='I could not believe, the GET even wanted to reject this invitation. It was a feature for me,
        to get this GET into the team. I almost thought, I asked another expert to join.'
      />
      <ImageAndText
        imgSrc={images['may_36.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='If you still could have the pendrive, then you could see the photos, then would not
        miss me at all. But without it, you could only miss me. So, thank you pendrive, 
        have a nice travel!'
      />
      <ImageAndText
        imgSrc={images['may_37.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👍'
        text='About this, you were right. And you proved it. You are really good to the people you like.'
      />
      <ImageAndText
        imgSrc={images['may_38.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👍'
        text='A nice comparison about silence, young woman. You made things so easy to understand, even a person with IQ 70 
        has no problem with it.'
      />
      <ImageAndText
        imgSrc={images['may_39.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💘'
        text='Remember it!'
      />
      <ImageAndText
        imgSrc={images['may_40.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🤔'
        text='Do not think about &lsquo;die&rsquo;, enjoy being loved by me and hurting me. And
        continue with it in the next lives too'
      />
      <ImageAndText
        imgSrc={images['may_41.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💘'
        text='Just like it'
      />
      <ImageAndText
        imgSrc={images['may_42.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='🤣'
        text='You know that I read a lot of news, which people don&rsquo;t read. I heard that some people&rsquo;s brain have 
        really been analyzed, but never heard because of this reason.'
      />
      <ImageAndText
        imgSrc={images['may_43.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😒'
        text='So directly, so merciless!'
      />
      <ImageAndText
        imgSrc={images['may_44.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😉'
        text='Do you know what I would do if I was Mamatha? I would tell Papatha that we will be back. And 
        then would buy Pommes with you, then back. Let the motherfuckers wait, and they can
        serve themselves, they have hands! But Mamatha is a good mother :-) '
      />
      <ImageAndText
        imgSrc={images['may_45.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😍'
        text='If you would be a man, meet such a woman. Would you let her go to others?'
      />
      <ImageAndText
        imgSrc={images['may_46.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😊'
        text='This reminds me a song, &lsquo;You will never be alone&rsquo;. I can feel your 
        presence all the time with me, we are a good team!'
      />
      <ImageAndText
        imgSrc={images['may_47.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🌷'
        text='This was really one of your most beautiful sides. You would think and do what makes people happy. 
        Anyone, who can have you in the life, is lucky. Cause you can give people what they want.'
      />
      <ImageAndText
        imgSrc={images['may_48.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😕'
        text='This was very nice of you. Just like I love you so much in my head, but hit you most times.'
      />
      <ImageAndText
        imgSrc={images['may_49.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👫'
        text='It was the time, that you decided wether you would come to rebase team. And if you think about it now,
        how is the feeling, working with me, the journey in rebase team, back to tornado, ... ? 
        Sometimes, there could be some moments in life, very tough. Closing the eyes and moving on! 
        You will see, the past is beautiful :-) '
      />
      <ImageAndText
        imgSrc={images['may_50.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😉'
        text='About sleeping time, maybe we can never solve this problem. But ok, for some problems, 
        people choose to live with them.'
      />
      <ImageAndText
        imgSrc={images['may_51.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🤔'
        text='Yes, I was happy that you did not make fun about my cooking. But what was it, &lsquo;go to WC by your own&rsquo;'
      />
      <ImageAndText
        imgSrc={images['may_52.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙂'
        text='Fame, I know my kid, she is not the one, who wants to have it. Sorry that old man forced you.'
      />
      <ImageAndText
        imgSrc={images['may_53.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😱'
        text='I do not feel good when I read this message. But ok, you had your fun.'
      />
      <ImageAndText
        imgSrc={images['may_54.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='You did really protect me from my shit thinking, you were there for helping me out of my shit, 
        this is one of the reasons why you are so beautiful for me, why I love you, and cannot stop it.'
      />
      <ImageAndText
        imgSrc={images['may_55.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='20%'
        textPointer='😌'
        text='ROLE MODEL'
      />
      <ImageAndText
        imgSrc={images['may_56.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👍'
        text='2-wheeler was nightmare in Feb., it was May, you were already feeling more confident. 
        Can you believe, several months later, you had to ride it almost everyday to pick up people? '
        imgSrc2={images['may_57.png']}
        widthValue2='80%'
        textPointer2='💪'
        text2='Think more positive about yourself! You have to see how strong you are!'
      />
      <ImageAndText
        imgSrc={images['may_58.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='I am proud of me to win the game! Even Mamatha can not beat me.'
      />
      <ImageAndText
        imgSrc={images['may_59.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['may_60.png']}
        textPointer2='😒'
        text2='Don&rsquo;t you want to know yourself again? Maybe rudeness is just your nature. And why blame me? 
        Why always blame me?'
      />
      <ImageAndText
        imgSrc={images['may_61.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🙄'
        text='You scared me this time, never thought that marrying you could be so dangerous.'
      />
      <ImageAndText
        imgSrc={images['may_62.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🤨'
        text='Look the way how this woman talked, boah, just like a mother to a kid.'
      />
      <ImageAndText
        imgSrc={images['may_63.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🙂'
        text='Just like I told you, some hobbies, I just have them for several years, not so long. 
        Like you in the school and college, we had to study, just study. But then I found more and 
        more interesting things in life. You would also find more, like baking?'
      />
      <ImageAndText
        imgSrc={images['may_64.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        imgSrc2={images['may_65.png']}
        widthValue2='90%'
        textPointer2='😉'
        text2='It is very interesting. For something this woman was never shy, even very bold. Asking for 
        camera was an example. Later on, about T-shirt and ...'
      />
      <ImageAndText
        imgSrc={images['may_66.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👍'
        text='A very kind woman'
      />
      <ImageAndText
        imgSrc={images['may_67.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙂'
        text='The same to you!'
      />
      <ImageAndText
        imgSrc={images['may_68.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='What is this for a &lsquo;shit&rsquo; connection ?'
      />
      <ImageAndText
        imgSrc={images['may_69.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😒'
        text='Already a lot in this life, can you please change your goal in the next?'
      />
      <ImageAndText
        imgSrc={images['may_70.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👏'
        text='The best reply about fat. Never heard, never thought that such a reply could be given.'
      />
      <ImageAndText
        imgSrc={images['may_71.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['may_72.png']}
        widthValue2='25%'
        textPointer2='😂'
        text2='Unbelievable idea! But we will do it!'
      />
      <ImageAndText
        imgSrc={images['may_73.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🤝'
        text='Yes, we will make this! I want to do all the things, which you planed for the rest of our lives, this life!'
      />
      <ImageAndText
        imgSrc={images['may_74.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        imgSrc2={images['may_75.png']}
        widthValue2='45%'
        textPointer2='👍'
        text2='Your like surprised me really, it is really greater... Keep it please!'
      />
      <ImageAndText
        imgSrc={images['may_76.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='💖'
        text='The song is not my favorite song. But the voice is my favorite voice. Not like the voice 
        in the meetings, it is another voice, very beautiful for me.'
      />
      <ImageAndText
        imgSrc={images['may_77.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='😒'
        text='Go back to your first line, you have your answer!'
      />
      <ImageAndText
        imgSrc={images['may_78.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='👫'
        text='Buy a pair of indoor shoes, take me there next time! Without your biggest fan, you can win nothing 
        and have no fun.'
      />
      <ImageAndText
        imgSrc={images['may_79.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='The best couple! They can understand each other really perfect!'
      />
      <ImageAndText
        imgSrc={images['may_80.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='💕'
        text='You will not!'
      />
      <ImageAndText
        imgSrc={images['may_81.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='55%'
        textPointer='😉'
        text='This is very our style!'
      />
      <ImageAndText
        imgSrc={images['may_82.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='25%'
        textPointer='🤬'
        text='Someone thinks that she is not superficial ... Not only once, more times!'
      />
      <ImageAndText
        imgSrc={images['may_83.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='Someone was really irritated! Dimmi, run! run fast!'
      />
      <ImageAndText
        imgSrc={images['may_84.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='😌'
        text='Can we go somewhere else except this and hell?'
      />
      <ImageAndText
        imgSrc={images['may_85.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😊'
        text='From the timestamp we can see, this sweetness can not even keep for one minute!'
      />
      <ImageAndText
        imgSrc={images['may_86.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='There was a project status meeting, I sit in front of the camera with PS. 
        You only saw me, no presentation? This was nice for me. And what is the problem, 
        if someone else did not say that I am ugly?'
      />
      <ImageAndText
        imgSrc={images['may_87.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='😂'
        text='Yes, you are right! You understand yourself correctly!'
      />
      <ImageAndText
        imgSrc={images['may_88.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='One day, the old man will be really very old, he would need your help for this.'
      />
      <ImageAndText
        imgSrc={images['may_89.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='55%'
        textPointer='👍'
        text='What a nice reply!'
      />
      <ImageAndText
        imgSrc={images['may_90.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='😉'
        text='Then let me be the taker, we match 100%'
      />
      <ImageAndText
        imgSrc={images['may_91.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😒'
        text='Time flows like water with us! We have no idea how to solve this problem, maybe we will never solve it.'
      />
      <ImageAndText
        imgSrc={images['may_92.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='How much bullshit does this woman have in her head???'
      />
      <ImageAndText
        imgSrc={images['may_93.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        imgSrc2={images['may_94.png']}
        widthValue2='55%'
        textPointer2='🙂'
        text2='This made me laugh.'
      />
      <ImageAndText
        imgSrc={images['may_95.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='😄'
        text='Then say it! and loud! Do not take this under the ground.'
      />
      <ImageAndText
        imgSrc={images['may_96.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='55%'
        textPointer='😒'
        text='What is the logic there? Every human has 2 faces, why should I keep this ugly side forever?'
      />
      <ImageAndText
        imgSrc={images['may_97.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤣'
        text='So much hate, double shit!'
      />
      <ImageAndText
        imgSrc={images['may_98.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='55%'
        textPointer='👫'
        text='Who &lsquo;more&rsquo; is not important, only we want each other happy, 
        we make us happy.'
      />
      <ImageAndText
        imgSrc={images['may_99.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙂'
        text='Take it easy, my kid. Now it is already history, what do you think about it?'
      />
      <ImageAndText
        imgSrc={images['may_100.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='🤣'
        text='It was not connection, it was preparation!'
      />
      <ImageAndText
        imgSrc={images['may_101.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😉'
        text='If the lizard is in your cloth, then you will know who is horrible.'
      />
    </>
  );
}
