import React from 'react';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from "./Login"
import Join from "./Join"

class Home extends React.Component {
  render() {
    return (
      <div className="MainContainer">
        <Link to="/login">
          <button className="BaroLogin">바로 로그인</button><br />
        </Link>
        <span> 아직 회원가입을 안하셨나요? <Link to="/join">회원가입</Link></span>
      </div >
    );
  }
}

export default Home;