import React from 'react';
import Logo from './static/images/logo.png';
import './App.css';
import Screenshot from './static/images/chatty-screenshot.png'
import { Navbar } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" expand="lg" className="App-navbar" fixed="top">
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          Chatty
        </Navbar.Brand>
      </Navbar>
      <header className="App-header">
        <div>
        <h1>Stay on top of your networking</h1>
        <h4>
          Keep track of how many colleagues you've spoken to lately,
          and who it's time to reach out to again.
        </h4>
        <br></br>
        <a href="https://slack.com/oauth/v2/authorize?client_id=1052632707317.1057131634261&scope=chat:write,files:write,users:read&user_scope=im:history,im:read"><img alt="Add to Slack" height="45" src="https://platform.slack-edge.com/img/add_to_slack.png" srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"/></a>
        </div>
        <div>
          <img src={ Screenshot } height={400} alt="screenshot of Chatty app" />
        </div>
      </header>
      <footer>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>&copy; Angela Branaes 2020</p>
      </footer>
    </div>
  );
}

export default App;
