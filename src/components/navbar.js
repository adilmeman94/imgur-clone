import React from "react";
import bg from "./header.png";
import logo from "./imgur.png";
import srcbtn from "./search.png";

class Navbar extends React.Component {
  render() {
    return (
      <header className="App-header">
        <div className="head">
          <img src={bg} alt="there is a img here!" className="nav-img"></img>
          <img src={logo} alt="ic" className="icon-img"></img>
          <div id="button">
            <button onClick={this.props.handleUpload} className="button">
              New post
            </button>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="images,#tags,@users oh my!"></input>
          </div>
          <div>
            <button className="search">
              <img src={srcbtn} alt="there is search bar" width="20px"></img>
            </button>
          </div>
          <div id="signin">
            <button onClick={this.props.handleSignIn} className="signin">
              Sign In
            </button>
          </div>
          <div id="signup">
            <button onClick={this.props.handleSignUp} className="signup">
              Sign Up
            </button>
          </div>
        </div>
      </header>
    );
  }
}
export default Navbar;
