import React from 'react';
import menu from '../public/images/menu.gif';
import ChangeDisplay from './js/changeDisplay.js';
import manekineko from '../public/images/manekineko.png';
import profile from '../public/images/profile.png';
import works from '../public/images/works.png';
import link from '../public/images/link.png';

import './css/homepage.css';

function App() {
  const changeDisplayRef = React.useRef(null);

  return (
    <div className="container">

      <div className="yukkuri">
        <img id="manekineko" src={manekineko} alt="招き猫" />ゆっくりしていってね<img id="manekineko" src={manekineko} alt="招き猫" />
      </div>
      <div className="main-content">
        <img src={menu} alt="menu" id="menuImg" />
        <div width="230" className="selectMenu">
          <a href="#" onClick={() => changeDisplayRef.current.handleProfileImgClick()}>
            <img id="profileImg" src={profile} alt="profileImg" />
          </a>
          <a href="#" onClick={() => changeDisplayRef.current.handleWorksImgClick()}>
            <img id="worksImg" src={works} alt="worksImg" />
          </a>
          <a href="#" onClick={() => changeDisplayRef.current.handleLinkImgClick()}>
            <img id="linkImg" src={link} alt="linkImg" />
          </a>
        </div>
        <ChangeDisplay ref={changeDisplayRef} />
      </div>
    </div>
  );
}

export default App;
