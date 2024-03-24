import React from 'react';
import menu from '../public/images/menu.gif';
import ChangeDisplay from './js/changeDisplay.js';
import manekineko from '../public/images/manekineko.png';
import profile from '../public/images/profile.png';
import works from '../public/images/works.png';
import link from '../public/images/link.png';
import iruka from '../public/images/iruka.png';
import pasokon from '../public/images/pasokon.png';
import irukaTopLine from '../public/images/irukaTopline.png';
import irukaBottomLine from '../public/images/irukaBottomline.png';
import irukaBg from '../public/images/haikei-umi.jpg';
import pasokonBg from '../public/images/pasokonBg.jpg';
import pasokonTopline from '../public/images/pasokonTopline.png';
import pasokonBottomline from '../public/images/pasokonBottomline.gif';
import oji from '../public/images/oji.gif';
import './css/homepage.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeDisplayRef = React.createRef();
    this.imageSet = {
    };
    this.irukaSet = {
      mainImg : iruka,
      topLineImg : irukaTopLine,
      bottomLineImg : irukaBottomLine,
      bgImage : irukaBg
    }
    this.pasokonSet = {
      mainImg : pasokon,
      topLineImg : pasokonTopline,
      bottomLineImg : pasokonBottomline,
      bgImage : pasokonBg
    }
    this.ojiSet = {
      mainImg : oji,
      topLineImg : irukaTopLine,
      bottomLineImg : irukaBottomLine,
      bgImage : irukaBg
    }
  }

  /** 画像設定 */
  setImages() {
    //サイト内画像設定
    this.imageSet = this.irukaSet;
    //this.imageSet = this.pasokonSet;
    //this.imageSet = this.ojiSet;

    //背景設定
    document.body.style.backgroundImage = `url(${this.imageSet.bgImage})`;
  }

  render() {
    this.setImages();
    return (
      <div className="container">
        <div id="topline-img">
          <img src={this.imageSet.topLineImg}/>
        </div>
        <div className="main-content">
          <img src={menu} alt="menu" id="menuImg" />
          <div width="230" className="selectMenu">
            <a href="#" onClick={() => this.changeDisplayRef.current.handleProfileImgClick()}>
              <img id="profileImg" className="menuButton" src={profile} alt="profileImg" />
            </a>
            <a href="#" onClick={() => this.changeDisplayRef.current.handleWorksImgClick()}>
              <img id="worksImg" className="menuButton" src={works} alt="worksImg" />
            </a>
            <a href="#" onClick={() => this.changeDisplayRef.current.handleLinkImgClick()}>
              <img id="linkImg" className="menuButton" src={link} alt="linkImg" />
            </a>
          </div>
          <ChangeDisplay ref={this.changeDisplayRef} mainImg={this.imageSet.mainImg}/>
          <img id="bottomline-img" src={this.imageSet.bottomLineImg} alt="bottomLine-img"/>
        </div>
      </div>
    );
  }
}

export default App;
