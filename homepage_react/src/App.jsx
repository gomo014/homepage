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

let clickFlag = false;

//ブラウザの初期変更時・サイズ変更時に、ブラウザサイズにあわせたコンテンツのサイズを調整
document.addEventListener('DOMContentLoaded', function () {
  resizeContainer();
});
window.addEventListener('resize', function () {
  if (!clickFlag) {
    resizeContainer();
  } else {
    resizeContainerAfterChanged();
  }
});

function resizeContainer() {
  const whRatio = window.innerWidth / window.innerHeight;
  //ブラウザ縦横比に合わせて、PCの画面の横位置を設定
  //adjustedValue : 横軸調整位置
  let adjustedValue = (whRatio < 1.81 ? -50 + whRatio * 0.6 : -50 - whRatio * 0.02) + '%';
  let AdjustScale = window.innerHeight * 0.0004;
  const container = document.querySelector('#beforeClick .container');
  const pointerZone = document.querySelector('#beforeClick #pointer-zone');
  container.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;
  pointerZone.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;

  //ブラウザ縦横比警告
  var caution = document.getElementById('before-caution');
  caution.classList.toggle('visible', whRatio > 5);
  caution.classList.toggle('hidden', !(whRatio > 5));
};

function resizeContainerAfterChanged() {
  const whRatio = window.innerWidth / window.innerHeight;
  //ブラウザ縦横比に合わせて、PCの画面の横位置を設定
  //adjustedValue : 横軸調整位置
  let adjustedValue = (-50 + (
    whRatio < 1.2 ? whRatio * 0.7 :
    whRatio < 1.4 ? whRatio * 0.6 :
    whRatio < 1.5 ? whRatio * 0.4 :
    whRatio < 1.6 ? whRatio * 0.25 :
    whRatio < 1.7 ? whRatio * 0.2 :
    whRatio < 1.8 ? whRatio * 0.15 :
    whRatio < 1.9 ? whRatio * 0.05 :
    whRatio < 2 ? -whRatio * 0.02 :
    whRatio < 2.1 ? -whRatio * 0.04 :
    whRatio < 2.3 ? -whRatio * 0.18 :
    whRatio < 3 ? -whRatio * 0.25 : -whRatio * 0.3)) + '%';
  
  let AdjustScale = window.innerHeight * 0.00078;
  const container = document.querySelector('#afterClick .container');
  container.style.transform = `translate(${adjustedValue}, -50%) scale(${AdjustScale})`;

  //ブラウザ縦横比警告
  var caution = document.getElementById('after-caution');
  caution.classList.toggle('visible', whRatio > 3.3);
  caution.classList.toggle('hidden', !(whRatio > 3.3));
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

  changeMainScreenSizeOnPcClick() {
    document.getElementById('beforeClick').style.opacity = '0';
    document.getElementById('afterClick').style.opacity = '1';
    setTimeout(function() {
      document.getElementById('beforeClick').style.display = 'none';
    }, 1000);

    const containerStyle = document.querySelector('#afterClick .container').style;
    containerStyle.top = "51%";
    containerStyle.left = "50.45%";

    //PC画像リサイズ
    const oldPCStyle = document.querySelector('#after-old-pc').style;
    oldPCStyle.top = "83%";
    oldPCStyle.left = "48%";
    oldPCStyle.height = "200%";

    clickFlag = true;

    //PC内画面リサイズ
    resizeContainerAfterChanged();
  }

  render() {
    this.setImages();
    return (
      <div>
        <div id="beforeClick">
          <div id="pointer-zone"  onClick={() => { this.changeMainScreenSizeOnPcClick() }}></div>
          <div className="container">
            <div className="main-content" style={{ backgroundImage: `url(${this.imageSet.bgImage})` }}>
              <div id="topline-img"><img src={this.imageSet.topLineImg} /></div>
              <img src={menu} alt="menu" id="menuImg" />
              <div width="230" className="selectMenu">
                <img id="profileImg" className="menuButton" src={profile} alt="profileImg" />
                <img id="worksImg" className="menuButton" src={works} alt="worksImg" />
                <img id="linkImg" className="menuButton" src={link} alt="linkImg" />
              </div>
              <ChangeDisplay ref={this.changeDisplayRef} mainImg={this.imageSet.mainImg} />
              <img id="bottomline-img" src={this.imageSet.bottomLineImg} alt="bottomLine-img" />
            </div>
          </div>
          <img id="before-old-pc" src={oldpc} alt="old-pc"/>
          <div id="white-screen"></div>
          <div id="before-caution">ブラウザを縦に広げてください</div>
        </div>
        <div id="afterClick">
          <div className="container">
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
          <img id="after-old-pc" src={oldpc} alt="old-pc" />
          <div id="after-caution" className="hidden">ブラウザを縦に広げてください</div>
        </div>
      </div>
    );
  }
}

export default App;
