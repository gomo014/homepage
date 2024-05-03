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
//import ojiTopline from '../public/images/ojiTopline.png';
import ojiBottomLine from '../public/images/ojiBottomLine.gif';
import ojiBg from '../public/images/ojiBg.png';
import oldpc from '../public/images/old-pc.png';
import './css/homepage.css';

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
      // topLineImg: ojiTopline,
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

    /*
    背景設定
    なぜかsetImageが２回実行されて、背景だけ２回目のもので設定されてしまうので、
    他に合わせて背景も１回目のもので設定するようにする
    */
    //if (!document.body.style.backgroundImage) {
    //  document.body.style.backgroundImage = `url(${this.imageSet.bgImage})`;
    //}
  }

  render() {
    this.setImages();
    return (
      <div>
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
        <img id="old-pc" src={oldpc} alt="old-pc" />
      </div>
    );
  }
}

export default App;
