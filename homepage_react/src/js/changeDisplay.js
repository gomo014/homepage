import React from 'react';
import Works from './works.js';
import '../css/changeDisplay.css';

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

  render() {
    return (
      <div>
        {this.state.isProfileVisible && (
          <div id="profile">
            profile
            profile
          </div>
        )}
        {this.state.isWorksVisible && (
          <div id="works">
            <Works />
          </div>
        )}
        {this.state.isLinkVisible && (
          <div id="link">
            LinkLink<br />
            LinkLink<br />
            LinkLink<br />
            LinkLink<br />
            LinkLink<br />
            LinkLink<br />
          </div>
        )}
        {this.state.isMailVisible && (
          <div className="toggle-mail">
            <img id="main-img" src={this.props.mainImg} alt="main-img"/>
          </div>
        )}
      </div>
    );
  }
}

export default ChangeDisplay;
