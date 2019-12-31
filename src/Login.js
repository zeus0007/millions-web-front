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
        //console.log( this.state.user_name, this.state.user_pw )
        
        
        let result = null;
        
        /* 에러 O => Response */
        // error.response
        // error.response.request.response (JSON)
        
        /* 에러 X => Response */
        // result.response
        // result.response.request.response (JSON)
        
        try{
            let result = await api.postLogin({ username : this.state.user_name, password : this.state.user_pw })
            this.setState({ username : this.state.user_name, email : "", password : this.state.user_pw }) // state 설정
            
            console.log(result.response)
            console.log(result.response.status)
            console.log(result.response.request.response, ">> 데이터 전송 성공")
            console.log(result.response.request.data, ">> 전송된 데이터")
            
            this.props.history.push('/MainScreen')
            
            this.doSignUp();
        }
        catch(error){
            if(error.response.status == 400){
                alert('아이디또는 비밀번호가 틀립니다!!!');
            }
            
            console.log(error.response)
            console.log(error.response.status, error.response.statusText, "데이터 전송 실패")
            console.log(error.response.request.response)
        }
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
