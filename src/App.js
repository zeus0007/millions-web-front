import React from 'react';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import HomeApp from "./HomeApp"
import Main from "./Main"
import SubjectLists from "./SubjectLists"
import MainTimer from "./MainTimer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={HomeApp} />
          <Route path="/main" component={Main} />
          <Route exact path="/main" component={SubjectLists} />
          <Route path="/main/mainTimer" component={MainTimer} />
          <Link to="/main">Go to main</Link>
        </Router>
      </div >
    );
  }
}



export default App;