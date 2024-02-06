import React from 'react';
import menu from '../public/images/menu.gif';
import ChangeDisplay from './js/changeDisplay.js';
import profile from '../public/images/profile.png';
import works from '../public/images/works.png';
import link from '../public/images/link.png';
import mail from '../public/images/mail.gif';
import testp from '../public/images/testProfile.png';
import testw from '../public/images/testWorks.png';
import './css/homepage.css';

function App() {
  const changeDisplayRef = React.useRef(null);

  return (
    <div className="container">
      <table border="6" bordercolor="red" width="500">
        <tbody>
          <tr>
            <td>
              <marquee><font size="14" color="blue"><b>ようこそたかゆきのホームページへ</b></font></marquee>
            </td>
          </tr>
        </tbody>
      </table>
      <table width="230">
        <tbody>
          <tr>
            <td>
              <marquee behavior="alternate">ゆっくりしていってね！</marquee>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="counter">
        <tbody>
          <tr>
            <td>
              あなたは
              <table border="0" cellSpacing="0" cellPadding="0" className="counterContent">
                <tbody>
                  <tr>
                    <td>
                      <img src="http://www.rays-counter.com/d1276_f6_066/65ba39047e126/" alt="アクセスカウンター" border="0" />
                    </td>
                  </tr>
                </tbody>
              </table>
              番目の訪問者です！
            </td>
          </tr>
        </tbody>
      </table>
      <div className="main-content">
        <img src={menu} alt="menu" className="menuImg" />
        <div width="230" className="selectMenu">
          <a href="#" onClick={() => changeDisplayRef.current.handleProfileImgClick()}>
            <img id="profileImg" src={profile} alt="profileImg" />
          </a>
          <a href="#"><img id="worksImg" src={works} alt="worksImg" /></a>
          <a href="#"><img id="linkImg" src={link} alt="linkImg" /></a>
        </div>
        <ChangeDisplay ref={changeDisplayRef} />
        <table>
          <tbody>
            <tr>
              <td className="mail">
                <a href="mailto:"><img src={mail} alt="mail" /></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
