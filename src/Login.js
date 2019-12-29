import React from 'react';
import './Style.css';
<<<<<<< HEAD
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
=======
import logo from './logo_text.png';
import { Link } from 'react-router-dom'
>>>>>>> abb605385e93d7836d01d49dd6cfbc88a9f18eea

class Login extends React.Component {
    render() {
        return (
            <div >
                 <Link to="/">
                    <img src={logo} alt="logo" className="Logo" />
                </Link>
                <form action="/" method="POST">
                    <p>아이디</p>
                    <input className="TextBox" type="text" placeholder="아이디"></input><br />
                    <p>비밀번호</p>
                    <input className="TextBox" type="password" placeholder="비밀번호"></input><br />
                    <input className="Button" type="submit" value="로그인"></input><br />
                </form>
                <span> 아직 회원가입을 안하셨나요? <Link to="/join">회원가입</Link></span>
            </div >
        );
    }
}

export default Login;