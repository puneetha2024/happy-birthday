import { useOutletContext } from 'react-router-dom';

import ImageAndText from '../common/ImageAndText/ImageAndText';
import Audio from '../common/Audio/Audio';
import importAll from '../../utils/importAll';
import apr from '../audios/Apr.mp3';

export default function April() {
  const { isSidebarOpened } = useOutletContext();

  const images = importAll(require.context(`../images/III/`, false, /\.(png|jpe?g|svg)$/));

  return (
    <>
      <Audio audioSrc={apr} />
      <ImageAndText
        imgSrc={images['apr_1.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='👏'
        text='Yes, we do. But we can also speak a lot others, we can also do a lot others. 
        We are more and more than bullshit master friends.'
      />
      <ImageAndText
        imgSrc={images['apr_2.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='One of shit woman&rsquo;s favorite games!'
      />
      <ImageAndText
        imgSrc={images['apr_3.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='Happy to hear it. Hope I can always give you this feeling.'
      />
      <ImageAndText
        imgSrc={images['apr_4.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        imgSrc2={images['apr_5.png']}
        widthValue2='90%'
        textPointer2='😒'
        text2='I will not go to mental hospital alone! With time you are often in my mind, just like that.'
      />
      <ImageAndText
        imgSrc={images['apr_6.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💪'
        text='3h41m bullshitting! It was unbelievable at that time. This record would be broken soon, LOL. 
        I cannot play this stop start game so good like this young woman.'
      />
      <ImageAndText
        imgSrc={images['apr_7.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤔'
        text='Okay, you are not laughing at me, just at my situation, right?'
      />
      <ImageAndText
        imgSrc={images['apr_8.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='We would have a very long list, should use the whole life time to punish another.'
      />
      <ImageAndText
        imgSrc={images['apr_9.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😏'
        text='Oh, say this word ugly to a friend so directly? And compare what the friend said to you?'
      />
      <ImageAndText
        imgSrc={images['apr_10.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['apr_11.png']}
        widthValue2='55%'
        textPointer2='😋'
        text2='Yes, normally this woman is quiet from inside. But to irritate her, is easy!'
      />
      <ImageAndText
        imgSrc={images['apr_12.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👍'
        text='Every human has more sides of the character. It is nice that many sides of a human can be understood,
        and can be liked.'
      />
      <ImageAndText
        imgSrc={images['apr_13.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='😄'
        text='Oh, yes. How do you call it, favoritism?'
      />
      <ImageAndText
        imgSrc={images['apr_14.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='💕'
        text='No, he will not stop. The kid has so many sides being liked, not only the look. 
        And for old man, he will always have this angel face in his eyes.'
      />
      <ImageAndText
        imgSrc={images['apr_15.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='So nice ..., this part of feeling was taken as a screenshot. Becoming special to
        another person is a nice feeling. Somehow two hearts were closer. BUT does this woman like 
        old man the same way, that she liked on the day?? Really the same?'
      />
      <ImageAndText
        imgSrc={images['apr_16.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😉'
        text='Can you tell me, which friend&rsquo;s photo you have already seen more than 100 times?'
      />
      <ImageAndText
        imgSrc={images['apr_17.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😒'
        text='Mix poison, ask me to eat! How stupid should I be to eat it??? But I would, if you prepared it'
      />
      <ImageAndText
        imgSrc={images['apr_18.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='65%'
        imgSrc2={images['apr_19.png']}
        widthValue2='25%'
        textPointer2='🤬'
        text2='OK, I can not stop him to ask, it is his right. BUT I care your answer!'
      />
      <ImageAndText
        imgSrc={images['apr_20.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😥'
        text='Do you have to hurt old man so hard ???'
      />
      <ImageAndText
        imgSrc={images['apr_21.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙂'
        text='You do really care. Did you think that you would care until the end of 2023, and continue with 2024?'
      />
      <ImageAndText
        imgSrc={images['apr_22.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🙂'
        text='You are so honest. In a lot of time our enemies are just ourselves. We have to overcome our negative emotions by doing.
        Some people use to put these on other people, then they would feel better, since the negative emotions are out. Fortunately to other people,
        you are not one of these people. Unfortunately to yourself, you are hard to yourself, want to face all by yourself! Let old man just stay with you,
        he wants to face all these with you, he can take some of them for you, so that you will not feel so heavy. '
      />
      <ImageAndText
        imgSrc={images['apr_23.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😮'
        text='This young woman became so rude already.'
      />
      <ImageAndText
        imgSrc={images['apr_24.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👏'
        text='This is so beautiful of you. Not choose the easy way, choose the way to make you stronger.'
      />
      <ImageAndText
        imgSrc={images['apr_25.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='Successfully failed! LOL! This woman made fun of herself, without any problem. So nice'
      />
      <ImageAndText
        imgSrc={images['apr_26.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤨'
        text='I knew you would find the solution, just make fun. Is it necessary to hate me so much?
        All in Uppercase?'
      />
      <ImageAndText
        imgSrc={images['apr_27.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😉'
        text='And you also know that curiosity kills the cats? You would know it, right?'
      />
      <ImageAndText
        imgSrc={images['apr_28.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='🌷'
        text='Wanted to see! The people, who have the pure heart,  can have the most beautiful smile.'
      />
      <ImageAndText
        imgSrc={images['apr_29.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😉'
        text='I did not miss the chance, I just did not want to have it.'
      />
      <ImageAndText
        imgSrc={images['apr_30.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='😄'
        text='Oh, what is here a nice wish from you! Should I take it? Coolmarie, Dimmi, difficult to choose ...'
      />
      <ImageAndText
        imgSrc={images['apr_31.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='After making a lot of fun of Sim Dim, we told each other the truth a little.
        The feeling of old man at that time was already different, so as the kid said &lsquo;more&rsquo;,
        she got &lsquo;I hope not&rsquo;. The old man was scared of a situation.'
      />
      <ImageAndText
        imgSrc={images['apr_32.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🧐'
        text='A hate list, but only with you. HHmm, maybe a list only with you, &lsquo;hate&rsquo; or others, maybe not so important'
      />
      <ImageAndText
        imgSrc={images['apr_33.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😍'
        text='Which &lsquo;xihuan&rsquo; was it? The whole part, sounds that we were acting korean drama, or not?'
      />
      <ImageAndText
        imgSrc={images['apr_34.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='👏'
        text='I was in training for the whole week. This scheduled message made my heart warm. Was happy
        to read this story.'
      />
      <ImageAndText
        imgSrc={images['apr_35.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='🌹'
        text='Thank you for this photo. It was for a long time the favorite photo of my lover.'
        imgSrc2={images['apr_42.png']}
        widthValue2='70%'
        textPointer2='😊'
        text2='No I will not love her less, 0 - whatever.'
        imgSrc3={images['apr_43.png']}
        widthValue3='30%'
        textPointer3='😂'
        text3='my lover'
      />
      <ImageAndText
        imgSrc={images['apr_36.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='📚'
        text='Is this the beginning of the textbook? Oh, this will continue for a long time. We will see.'
      />
      <ImageAndText
        imgSrc={images['apr_37.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['apr_38.png']}
        imgSrc3={images['apr_39.png']}
        textPointer3='😊'
        text3='A very nice memory here. The kid had to work very long for POC, old man was allowed to 
        stay there, waited that the kid finished her work. Just waited for no reason.
        The best moment was that the kid pinged and said &lsquo;I am done&rsquo;. The kid
        knew exactly why the old man was there, but still asked.'
        imgSrc4={images['apr_41.png']}
        textPointer4='🤗'
        text4='We had calls mostly after your POC. It was an enjoyment for me. We had the whole day behind us.
        I wanted to hear how happy you were, that you finished your POC well.'
      />
      <ImageAndText
        imgSrc={images['apr_40.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='35%'
        textPointer='🙄'
        text='May I know it now, how you wanted to prove?'
      />
      <ImageAndText
        imgSrc={images['apr_44.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🙂'
        text='Still remember that I asked you not to make fun of her? I did not tell you my reason.
        Just promised you to tell you when you leave the project. Actually I had one already at that time,
        whom I fell in love. I did not want to call other woman &lsquo;my lover&rsquo;.'
      />
      <ImageAndText
        imgSrc={images['apr_45.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='🙂'
        text='It was a stupid question, right? But maybe now you understood why I asked at that time.
        Did not want to irritate you at all. The feeling was very complex, as I asked.'
      />
      <ImageAndText
        imgSrc={images['apr_46.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='40%'
        textPointer='👍'
        text='You did, you did it very good. That song was not your song, but I understood why you choose it.
        Let me hear one of your songs one day live, not a record.'
      />
      <ImageAndText
        imgSrc={images['apr_47.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='👏'
        text='Reviewer, old man, they were proud of you for your work. And you know that you did this feature 
        very well. There was a very clear &lsquo;approve&rsquo;'
        imgSrc2={images['apr_48.png']}
        widthValue2='80%'
        textPointer2='🥵'
        text2='The worst thing? Hope you changed your mind now.'
      />
      <ImageAndText
        imgSrc={images['apr_49.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👏'
        text='You have a beautiful picture in other people&rsquo;eyes. All of these, thank someone <=> past Puneetha'
      />
      <ImageAndText
        imgSrc={images['apr_50.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😋'
        text='Really &lsquo;I don&rsquo;t know why&rsquo;? Do no say that you do not like sharing. 
        This is not the root.'
      />
      <ImageAndText
        imgSrc={images['apr_51.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='💘'
        text='Also easy for me! You speak honestly with me since the first day. I also like 
        your bullshit, and I also want to understand you!'
      />
      <ImageAndText
        imgSrc={images['apr_52.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😥'
        text='Already husband????'
      />
      <ImageAndText
        imgSrc={images['apr_53.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😋'
        text='If one person has so much impact on another, what could this person mean for another? just &lsquo;like more&rsquo;?'
      />
      <ImageAndText
        imgSrc={images['apr_54.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='It is nice that we could share our feeling and trust each other. Had the same 
        feeling as I was in college, LOL. Actually I hoped that the work could be different.'
      />
      <ImageAndText
        imgSrc={images['apr_55.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='💕'
        text='Here I was talking about what I would like to hide in front of you.But your answer surprised me.'
        imgSrc2={images['apr_57.png']}
        widthValue2='40%'
        textPointer2='🥰'
        text2='We started to tell each other about our miss.'
      />
      <ImageAndText
        imgSrc={images['apr_56.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='🤝'
        text='Except talking, we had another idea, studying together in a video call. We both liked it, and later
        we did it more times. Sometimes we learnt our own, sometimes we learnt together. 
        We grow up together.'
      />
      <ImageAndText
        imgSrc={images['apr_58.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👍'
        text='It was in April 2023, 56 min for a call. Tried to find out why the theming did not work.
        In Jan. 2024, you worked on the same topic alone, and finished it successfully with an example.
        I am proud of you, this is your growth!'
      />
      <ImageAndText
        imgSrc={images['apr_59.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='Let me try to translate it. At first, Qinyuan Sir are you here? Then Puneetha, I am here.
        Oh, super, this meets my expectation, I just wanted that you waited for me. Then, 
        it is so late, go to bed, but before that chat a little with me. Then a question why can you 
        meet my expectation, you know that I wished you could wait for me?'
      />
      <ImageAndText
        imgSrc={images['apr_60.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='😋'
        text='As we all know, he did not come back from the supermarket. He made a 
        supermarket tour in the whole world.'
      />
      <ImageAndText
        imgSrc={images['apr_61.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😱'
        text='This accident! I shared our chat for some time in the daily.
        A very bad one at that time, but a nice memory now!'
      />
      <ImageAndText
        imgSrc={images['apr_62.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='💕'
        text='They just missed each other like friends.'
      />
      <ImageAndText
        imgSrc={images['apr_63.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='65%'
        textPointer='👍'
        text='Passion is something really nice. Old man is there, he would 
        like to take all.'
      />
      <ImageAndText
        imgSrc={images['apr_64.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='🥰'
        text='Felt warm by reading it. 2 kids will be taking to each other.
        This is what they do every day. Hope they could keep the purest heart forever with them.'
      />
      <ImageAndText
        imgSrc={images['apr_65.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='🙂'
        text='The doll has a special armor, nothing can break it. Hold it in the way that you like.'
      />
      <ImageAndText
        imgSrc={images['apr_66.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='🙂'
        text='You see, the old man is just talking talking talking. So much happiness in one year the old man
        never had it before, cause the young woman was always there for him.'
      />
      <ImageAndText
        imgSrc={images['apr_67.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='65%'
        textPointer='😊'
        text='Would this kid mind to keep the old man there with her?'
      />
      <ImageAndText
        imgSrc={images['apr_68.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='85%'
        textPointer='😂'
        text='Suddenly the woman brought a competition and wanted to proved that she is the winner.
        Maybe less thinking could be better.'
      />
      <ImageAndText
        imgSrc={images['apr_69.png']}
        isSidebarOpened={isSidebarOpened}
        imgSrc2={images['apr_70.png']}
        textPointer2='💘'
        text2='The conversation were so nice. As I read it again, I smiled and had a warm heart.'
      />
      <ImageAndText
        imgSrc={images['apr_71.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤨'
        text='Hiding the real feeling is the nature of this woman. But she could find some excuses.'
      />
      <ImageAndText
        imgSrc={images['apr_72.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='15%'
        textPointer='💖'
        text='I think it was the first time you have it in text. Just got => hard ignored'
      />
      <ImageAndText
        imgSrc={images['apr_73.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='This has to be my TYPE! The best reply!'
      />
      <ImageAndText
        imgSrc={images['apr_74.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='30%'
        textPointer='🤔'
        text='I was not sure, if I should be happy or sad. Anyway, this &lsquo;next life&rsquo; woman came.'
      />
      <ImageAndText
        imgSrc={images['apr_75.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='😉'
        text='Was the feeling the same from the text and behind the text?'
      />
      <ImageAndText
        imgSrc={images['apr_76.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='70%'
        textPointer='😉'
        text='Nice to read such a message. What a good LIAR at that time!'
      />
      <ImageAndText
        imgSrc={images['apr_77.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='80%'
        textPointer='😉'
        text='Thank you for letting me do it at that time. It was unbelievable that I was allowed to do it.'
      />
      <ImageAndText
        imgSrc={images['apr_78.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='Here we had different purposes. Someone did not want that you struggle with yourself, and 
        you wanted to let someone be proud of you. But it came well in the end.'
      />
      <ImageAndText
        imgSrc={images['apr_79.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='👫'
        text='Hope that I can the happiest woman in the entire world this year.'
      />
      <ImageAndText
        imgSrc={images['apr_80.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😄'
        text='Godddd? Someone would like to join me, without asking me if it is ok for me.'
      />
      <ImageAndText
        imgSrc={images['apr_81.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😡'
        text='Oh, it was nice. Even with a broken ball, you both could have so much fun. Really the best match.'
      />
      <ImageAndText
        imgSrc={images['apr_82.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='💟'
        text='Life could be hard anytime. With this woman, it should always taste sweet.'
      />
      <ImageAndText
        imgSrc={images['apr_83.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        imgSrc2={images['apr_84.png']}
        widthValue2='90%'
        textPointer2='💖'
        text2='I still have the both. Is it still the only thing that you want from me? 
        Maybe having the both is not a bad idea.'
      />
      <ImageAndText
        imgSrc={images['apr_85.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😝'
        text='Were we acting korean drama?'
      />
      <ImageAndText
        imgSrc={images['apr_86.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='🤪'
        text='The kid does not like that I could have a lover. This is strange!'
      />
      <ImageAndText
        imgSrc={images['apr_87.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='🙂'
        text='Also had such moments. Saw someone, and remembered you, wished that you could be this one.'
      />
      <ImageAndText
        imgSrc={images['apr_88.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='60%'
        textPointer='🙋‍♂️'
        text='Yes, may your mother be! Just say &lsquo;I will&rsquo;'
      />
      <ImageAndText
        imgSrc={images['apr_89.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='😠'
        text='Next time, when I make crepes, will force you to eat all of them.
        And remember, if people are already sick, they cannot be more sicker.'
      />
      <ImageAndText
        imgSrc={images['apr_90.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='😒'
        text='Still have the opinion? I would not say it as wasting time, just
        an experience in the life, could be good, could be bad. Important is that
        people enjoyed in that time. About the final result, it is an another story.'
      />
      <ImageAndText
        imgSrc={images['apr_91.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='25%'
        textPointer='😂'
        text='By making fun of others in a kind way, you are number 1! No doubt!'
      />
      <ImageAndText
        imgSrc={images['apr_92.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='❤️'
        text='Keep your words!'
      />
      <ImageAndText
        imgSrc={images['apr_93.png']}
        isSidebarOpened={isSidebarOpened}
        textPointer='😂'
        text='Shit had no further words, speechless. You are just good!'
      />
      <ImageAndText
        imgSrc={images['apr_94.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='50%'
        textPointer='🤣'
        text='This should be the first time what you were sleeping and did not realize the time. 
        It was ok, really! Cause this will happen again and again! And you would have a new name
        &lsquo;sleeping beauty&rsquo;'
      />
      <ImageAndText
        imgSrc={images['apr_95.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='25%'
        textPointer='💓'
        text='The first time, got a heart as reaction'
      />
      <ImageAndText
        imgSrc={images['apr_96.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='The kid went for first vacation, before leaving, a nice message to old man.'
      />
      <ImageAndText
        imgSrc={images['apr_97.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💖'
        text='The kid came back one day earlier :-) . About reading the message, it was
        believable, someone calls it connection.'
      />
      <ImageAndText
        imgSrc={images['apr_98.png']}
        isSidebarOpened={isSidebarOpened}
        widthValue='90%'
        textPointer='💞'
        text='May I just hug you tightly without any words'
      />
    </>
  );
}
