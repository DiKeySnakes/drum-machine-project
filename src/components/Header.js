import logo from './src/logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <div id='logo'>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <p>Drum Machine Project</p>
    </header>
  );
}

export default Header;
