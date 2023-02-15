import KeyboardKey from './KeyboardKey.js';

function Keyboard({ sounds, play }) {
  return (
    <div id='drum-pad-container' className='keyboard'>
      {sounds.map((sound) => (
        <KeyboardKey key={sound.id} sound={sound} play={play} />
      ))}
    </div>
  );
}

export default Keyboard;
