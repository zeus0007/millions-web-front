import React from 'react';
import logo from './logo_text.png';
import './Style.css';
import { Link } from 'react-router-dom'

class Main extends React.Component {
    render() {
        return (
            <body>
                <Link to="/main">
                    <img src={logo} alt="logo" className="LogoMainScreen" />
                </Link>
            </body>
        );
    }
}

export default Main;