import React from 'react';
import './Style.css';
import logo from './logo_text.png';
import { Link } from 'react-router-dom';
import api from './RequestCRUD';


class Login extends React.Component {

    constructor(props){
        super(props);
        this.state={ user_name: "", user_pw: "" }
    }
    
    handlingLogin = (event) => { // handling Change Function
        this.setState({[event.target.name]: event.target.value}) // state 설정
    }
    

    connectLogin = async (event) => { // transfer Data to API server through AXIOS ( RequestCRUD.js )
        console.log("데이터 전송 시작")
        event.preventDefault() // event 기능을 막음, 특히 submit을 눌렀을 때 새로고침되는 것을 막기위해서
        console.log( this.state.user_name, this.state.user_pw )
        let result = await api.postLogin({ username : this.state.user_name, password : this.state.user_pw })
        this.setState({ 
            username : this.state.user_name, email : "", 
            password : this.state.user_pw }) // state 설정
        console.log(result, "데이터 전송 성공")
            
        this.doSignUp();
            
        this.props.history.push('/main');
        /* result(HTTP response).header를 통해 Login 오류 처리 */
        /*if(result.header){

        }

        else{
            this.props.history.push('/MainScreen');
        }*/

    }
   

    doSignUp = () =>{
        const {user_name, user_pw} = this.state;

        window.sessionStorage.setItem('user_name',user_name);
        window.sessionStorage.setItem('user_pw',user_pw);

    }

    render() {
        return (
            <div>

                <form action="/" method="POST" onSubmit={this.connectLogin}>
                    <p>아이디</p>
                    <input name="user_name"className="TextBox" type="text" placeholder="아이디" onChange={this.handlingLogin}></input><br />

                    <p>비밀번호</p>
                    <input name="user_pw" className="TextBox" type="password" placeholder="비밀번호" onChange={this.handlingLogin}></input><br />

                    <input className="Button" type="submit" value="로그인"></input><br />
                </form>

                <span> 아직 회원가입을 안하셨나요? <Link to="/join">회원가입</Link></span>
            </div>
        );
    }
}



export default Login;