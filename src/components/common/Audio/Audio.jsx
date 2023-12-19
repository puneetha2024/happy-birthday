import './Audio.css';

const Audio = (props) => {
  return (
    <div className='audioContainer'>
      {/* Here we have to import the audio source file and then put it into src tag  */}
      <audio src={props.audioSrc} controls />
    </div>
  );
};

export default Audio;
