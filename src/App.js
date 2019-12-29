import React from 'react';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import HomeApp from "./HomeApp"
import Main from "./Main"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomeApp} />
          <Route exact path="/main" component={Main} />
          <Link to="/main">Go to main</Link>
        </Router>
      </div >
    );
  }
}



export default App;