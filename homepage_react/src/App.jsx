import React from 'react';
import menu from '../public/images/menu.gif';
import profile from '../public/images/profile.png';
import works from '../public/images/works.png';
import link from '../public/images/link.png';
import mail from '../public/images/mail.gif';
import './css/homepage.css';

function App() {
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
      <table style={{ backgroundColor: 'pink' }}>
        <tbody>
          <tr>
            <td>
              あなたは<font color="red"><b>３２８</b></font>番目の訪問です！昨日は 人でした！キリ番の人は掲示板にカキコして下さい！素通り禁止！！
            </td>
          </tr>
        </tbody>
      </table>
      <img src={menu} alt="menu" />
      <table width="230">
        <tbody>
          <tr>
            <td  className="menu"><a href="#"><img src={profile} alt="profile" /></a></td>
            <td  className="menu"><a href="#"><img src={works} alt="works" /></a></td>
            <td  className="menu"><a href="#"><img src={link} alt="link" /></a></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <a href="mailto:"><img src={mail} alt="mail" /></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;