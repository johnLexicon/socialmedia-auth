import logo from './logo.svg';
import './App.css';
import socialMediaAuth from './services/auth';
import {
  facebookProvider,
  githubProvider,
  googleProvider,
} from './config/authMethods';

function App() {
  const handleOnClick = async (provider) => {
    const result = await socialMediaAuth(provider);
    console.log(result);
  };
  return (
    <div className="App">
      <button onClick={() => handleOnClick(facebookProvider)}>Facebook</button>
      <button onClick={() => handleOnClick(githubProvider)}>Github</button>
      <button onClick={() => handleOnClick(googleProvider)}>Google</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
