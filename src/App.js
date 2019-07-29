import React from 'react';
import './App.css';
import foxface from './foxface.png';

function App() {
  return (
    <React.Fragment>
        <div className="App">
        <img src={"https://dagg.xyz/randomfox/images/" + (Math.floor(Math.random() * 124) + 1) + ".jpg"} alt="Fox!" className="FoxImage" />
        <div className="RefreshBar">
          <img src={foxface} alt="Button" className="Button" onClick={reload} />
        </div>
      </div>
    </React.Fragment>
  );
}

function reload()
{
  setTimeout(z => { window.location.reload() }, 1000)
}

export default App;
