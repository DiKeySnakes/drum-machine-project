import heater1 from './sounds/Heater-1.mp3';
import heater2 from './sounds/Heater-2.mp3';
import heater3 from './sounds/Heater-3.mp3';
import heater4 from './sounds/Heater-4.mp3';
import clap from './sounds/Clap.mp3';
import openHH from './sounds/Open-HH.mp3';
import kickNHat from './sounds/Kick_n_Hat.mp3';
import kick from './sounds/Kick.mp3';
import closedHH from './sounds/Closed-HH.mp3';

import Keyboard from './Keyboard.js';

function DrumMachine() {
  const sounds = [
    {
      keyCode: 81,
      key: 'Q',
      id: 'Heater-1',
      url: heater1,
    },
    {
      keyCode: 87,
      key: 'W',
      id: 'Heater-2',
      url: heater2,
    },
    {
      keyCode: 69,
      key: 'E',
      id: 'Heater-3',
      url: heater3,
    },
    {
      keyCode: 65,
      key: 'A',
      id: 'Heater-4',
      url: heater4,
    },
    {
      keyCode: 83,
      key: 'S',
      id: 'Clap',
      url: clap,
    },
    {
      keyCode: 68,
      key: 'D',
      id: 'Open-HH',
      url: openHH,
    },
    {
      keyCode: 90,
      key: 'Z',
      id: 'Kick-n-Hat',
      url: kickNHat,
    },
    {
      keyCode: 88,
      key: 'X',
      id: 'Kick',
      url: kick,
    },
    {
      keyCode: 67,
      key: 'C',
      id: 'Closed-HH',
      url: closedHH,
    },
  ];

  const play = (key, id) => {
    const audio = document.getElementById(key);
    const display = document.getElementById('display');
    audio.currentTime = 0;
    audio.play();
    display.textContent = id;
  };

  return (
    <div id='drum-machine'>
      <Keyboard sounds={sounds} play={play} />
      <div id='controls-container'>
        <div id='display'></div>
      </div>
    </div>
  );
}

export default DrumMachine;
