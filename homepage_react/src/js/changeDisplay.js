import React from 'react';
import Works from './works.js';
import '../css/changeDisplay.css';
import me from '../../public/images/profile_me.png';
import koujichu from '../../public/images/koujichu.gif';
import koujichu2 from '../../public/images/koujichu2.gif';

class ChangeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProfileVisible: false,
      isWorksVisible: false,
      isLinkVisible: false,
      isMailVisible: true
    };
  }

  handleProfileImgClick() {
    this.setState(prevState => ({
      isProfileVisible: prevState.isProfileVisible ? false : true,
      isWorksVisible: false,
      isLinkVisible: false,
      isMailVisible: prevState.isProfileVisible ? true : false
    }));
  }

  handleWorksImgClick() {
    this.setState(prevState => ({
      isProfileVisible: false,
      isWorksVisible: prevState.isWorksVisible ? false : true,
      isLinkVisible: false,
      isMailVisible: prevState.isWorksVisible ? true : false
    }));
  }

  handleLinkImgClick() {
    this.setState(prevState => ({
      isProfileVisible: false,
      isWorksVisible: false,
      isLinkVisible: prevState.isLinkVisible ? false : true,
      isMailVisible: prevState.isLinkVisible ? true : false
    }));
  }

  getAge(year, month, day) {
    const today = new Date();
    const birthdate = new Date(year, month - 1, day);
    const currentYearBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    let age = today.getFullYear() - birthdate.getFullYear();
    if (today < currentYearBirthday) {
      age--;
    }
    return age;
  }

  render() {
    return (
      <div>
        {this.state.isProfileVisible && (
          <div id="profile">
            <img id="me" src={me} alt="profile-me" />
            <div id="profile-content">
              <div className="profile-element">年齢：{this.getAge(1995, 9, 8)}さい<br /></div>
              <div className="profile-element">スキル：Java、Python、Javascript<br /></div>
              <div className="profile-element">趣味：音楽、ゲーム、サーフィン(ネット)<br /></div>
              <div className="profile-element">好きな食べ物：かに<br /></div>
            </div>
          </div>
        )}
        {this.state.isWorksVisible && (
          <div id="works">
            <Works />
          </div>
        )}
        {this.state.isLinkVisible && (
          <div id="link">
            <img id="koujichu" src={koujichu} alt="koujichu" />
            <img id="koujichu2" src={koujichu2} alt="koujichu2" />
            <img id="koujichu" src={koujichu} alt="koujichu" />
          </div>
        )}
        {this.state.isMailVisible && (
          <div className="toggle-mail">
            <img id="main-img" src={this.props.mainImg} alt="main-img" />
          </div>
        )}
      </div>
    );
  }
}

export default ChangeDisplay;
