import React from 'react';
import logo from './logo_text.png';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from "./Home"
import Login from "./Login"
import Join from "./Join"
import MainScreen from "./MainScreen"



class App extends React.Component {
  render() {
    return (
        <Router>
          <header>
            
          </header>

          <main className="Main">
            <div className="App">
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/join" component={Join} />            
            </div>
            <Route path="/MainScreen" component={MainScreen} />
          </main>
          
        </Router>
    );
  }
}



export default App;