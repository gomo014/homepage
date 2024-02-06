import React from 'react';
import testp from '../../public/images/testProfile.png';

class ChangeDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTestpVisible: false
    };

  }

  handleProfileImgClick() {
    this.setState(prevState => ({
      isTestpVisible: !prevState.isTestpVisible
    }));
  }

  render() {
    return (
      <div>
        {this.state.isTestpVisible && (
          <div id="testp">
            <img src={testp} alt="testp" />
          </div>
        )}
      </div>
    );
  }
}

export default ChangeDisplay;
