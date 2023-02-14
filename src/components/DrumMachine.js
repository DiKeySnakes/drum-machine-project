function DrumMachine() {
  return (
    <div id='drum-machine'>
      <div id='drum-pad-container'>
        <button id='heater1' className='drum-pad'>
          Q
        </button>
        <button id='heater2' className='drum-pad'>
          W
        </button>
        <button id='heater3' className='drum-pad'>
          E
        </button>
        <button id='heater4' className='drum-pad'>
          A
        </button>
        <button id='clap' className='drum-pad'>
          S
        </button>
        <button id='openHH' className='drum-pad'>
          D
        </button>
        <button id='kickNHat' className='drum-pad'>
          Z
        </button>
        <button id='kick' className='drum-pad'>
          X
        </button>
        <button id='closedHH' className='drum-pad'>
          C
        </button>
      </div>
      <div id='controls-container'>
        <div id='display'></div>
      </div>
    </div>
  );
}

export default DrumMachine;
