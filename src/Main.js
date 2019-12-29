import React from 'react';
import logo from './logo_text.png';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import MainTimer from './MainTimer';
import HomeApp from "./HomeApp"
import SubjectLists from "./SubjectLists"

class Main extends React.Component {
    render() {
        return (
            <body>
                <Router>
                    <Link to="/main">
                        <img src={logo} alt="logo" className="LogoMainScreen" />
                    </Link>
                    <Route path="/mainTimer" component={MainTimer} />
                    <Route path="/main" component={SubjectLists} />
                </Router>
            </body>
        );
    }
}

export default Main;