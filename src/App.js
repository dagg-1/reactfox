import React from 'react';
import './App.css';
import foxface from './foxface.png';

function App() {
  return (
    <React.Fragment>
        <div className="App">
        <img src="https://dagg.xyz/randomfox/images/91.jpg" alt="Fox!" className="FoxImage" />
        <div className="RefreshBar">
          <img src={foxface} alt="Button" className="Button" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
