import React from 'react';
import menu from '../public/images/menu.gif';
import ChangeDisplay from './js/changeDisplay.js';
import profile from '../public/images/profile.png';
import works from '../public/images/works.png';
import link from '../public/images/link.png';
import iruka from '../public/images/irukaImg.gif';
import pasokon from '../public/images/pasokon.gif';
import irukaTopLine from '../public/images/irukaTopline.png';
import irukaBottomLine from '../public/images/irukaBottomline.png';
import irukaBg from '../public/images/haikei-umi.jpg';
import pasokonBg from '../public/images/pasokonBg.jpg';
import pasokonTopline from '../public/images/pasokonTopline.png';
import pasokonBottomline from '../public/images/pasokonBottomline.gif';
import oji from '../public/images/oji.gif';
import ojiTopline from '../public/images/ojiTopline.png';
import ojiBottomLine from '../public/images/ojiBottomLine.gif';
import ojiBg from '../public/images/ojiBg.png';
import oldpc from '../public/images/old-pc.png';
import './css/homepage.css';

//ブラウザの初期変更時・サイズ変更時に、ブラウザサイズにあわせたコンテンツのサイズを調整
document.addEventListener('DOMContentLoaded', function () {
  resizeContainer();
});
window.addEventListener('resize', function () {
  resizeContainer();
});

function resizeContainer() {
  const iw = window.innerWidth;
  const ih = window.innerHeight;
  const whRatio = iw / ih;
  const diff = whRatio - 2.1;
  const adjustedValue = (-50.1 - (diff * 1.5)) + '%';
  let AdjustScale;
  const container = document.getElementsByClassName('container')[0];

  if (document.getElementById('old-pc').style.height === "200%") {
    AdjustScale = window.innerHeight * 0.00078;
  } else {
    AdjustScale = window.innerHeight * 0.0004;
  }
  container.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeDisplayRef = React.createRef();
    this.imageSet = {
    };
    this.irukaSet = {
      mainImg: iruka,
      topLineImg: irukaTopLine,
      bottomLineImg: irukaBottomLine,
      bgImage: irukaBg,
    }
    this.pasokonSet = {
      mainImg: pasokon,
      topLineImg: pasokonTopline,
      bottomLineImg: pasokonBottomline,
      bgImage: pasokonBg,
    }
    this.ojiSet = {
      mainImg: oji,
      topLineImg: ojiTopline,
      bottomLineImg: ojiBottomLine,
      bgImage: ojiBg,
    }
    this.isClickedMonitor = false
  }

  /** 画像設定 */
  setImages() {
    //サイト内画像設定
    // どれか１つの画像セットをランダムに設定
    var randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex) {
      case 0:
        this.imageSet = this.irukaSet;
        break;
      case 1:
        this.imageSet = this.pasokonSet;
        break;
      case 2:
        this.imageSet = this.ojiSet;
        break;
    }
  }

  setPCImageAfterClick() {
    if (!this.isClickedMonitor) {
      const containerStyle = document.querySelector('.container').style;
      containerStyle.top = "51%";
      containerStyle.left = "50.45%";
      const oldPCStyle = document.getElementById('old-pc').style;
      oldPCStyle.top = "83%";
      oldPCStyle.left = "48%";
      oldPCStyle.height = "200%";
      resizeContainer()
      this.isClickedMonitor = true;
    }
  }

  render() {
    this.setImages();
    return (
      <div>
        <div className="container" onClick={() => { this.setPCImageAfterClick() }}>
          <div className="main-content" style={{ backgroundImage: `url(${this.imageSet.bgImage})` }}>
            <div id="topline-img"><img src={this.imageSet.topLineImg} /></div>
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
            <ChangeDisplay ref={this.changeDisplayRef} mainImg={this.imageSet.mainImg} />
            <img id="bottomline-img" src={this.imageSet.bottomLineImg} alt="bottomLine-img" />
          </div>
        </div>
        <img id="old-pc" src={oldpc} alt="old-pc" />
        <div id="white-screen"></div>
      </div>
    );
  }
}

export default App;
