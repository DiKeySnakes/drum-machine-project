import React, { useEffect } from 'react';

function KeyboardKey({ play, sound: { keyCode, key, id, url } }) {
  const handleKeydown = (e) => {
    if (keyCode === e.keyCode) {
      const audio = document.getElementById(key);
      const display = document.getElementById('display');
      audio.play();
      audio.currentTime = 0;
      display.textContent = id;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  });

  return (
    <button
      value='test'
      id={keyCode}
      className='drum-pad'
      onClick={() => play(key, id)}>
      <audio preload='auto' className='clip' src={url} id={key} />
      {key}
    </button>
  );
}

export default KeyboardKey;
