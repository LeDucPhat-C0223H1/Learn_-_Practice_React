import React from "react";
import Greeting from "./Greeting";

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
    //   this.handleLoginClick = this.handleLoginClick.bind(this);
    //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.handleClick = this.handleClick.bind(this);

      this.state = {isLoggedIn: false};
    }
  
    // handleLoginClick() {
    //   this.setState({isLoggedIn: true});
    // }
  
    // handleLogoutClick() {
    //   this.setState({isLoggedIn: false});
    // }

    handleClick() {
        this.setState(prevState => ({
          isLoggedIn: !prevState.isLoggedIn
        }));
      }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
    //   if (isLoggedIn) {
    //     button = <LogoutButton onClick={this.handleLogoutClick} />;
    //   } else {
    //     button = <LoginButton onClick={this.handleLoginClick} />;
    //   }
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleClick} />;
      } else {
        button = <LoginButton onClick={this.handleClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
}

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

export default LoginControl;