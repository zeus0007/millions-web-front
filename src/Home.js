import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'
import logo from './logo_text.png';

class Home extends React.Component {
  render() {
    return (
      <body>
        <Link to="/">
          <img src={logo} alt="logo" className="Logo" />
        </Link>
        <div className="MainContainer">
          <Link to="/login">
            <button className="BaroLogin">바로 로그인</button><br />
          </Link>
          <span> 아직 회원가입을 안하셨나요? <Link to="/join">회원가입</Link></span>
        </div >
      </body>
    );
  }
}

export default Home;