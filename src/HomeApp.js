import React from 'react';
import logo from './logo_text.png';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import { Switch } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Join from "./Join"

class HomeApp extends React.Component {
    render() {
        return (
            <div className="MainContainer">
                <Router>
                    <header >
                        <Link to="/">
                            <img src={logo} alt="logo" className="Logo" />
                        </Link>
                    </header>
                    <main className="Main">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/login" component={Login} />
                            <Route path="/join" component={Join} />
                        </Switch>
                    </main>
                </Router>
            </div >
        );
    }
}

export default HomeApp;