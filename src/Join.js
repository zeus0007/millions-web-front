import React from 'react';
import './Style.css';
import api from './RequestCRUD'

class Join extends React.Component {
    constrcutor(props) {
        this.state = { user_name: "", email: "", user_pw: "", user_pw2: "", }
    }

    handlingJoin = (event) => { // handling Change Function
        this.setState({ [event.target.name]: event.target.value }) // state 설정
    }

    connectSignUp = async (event) => { // transfer Data to API server through AXIOS ( RequestCRUD.js )

        console.log("데이터 전송 시작")
        event.preventDefault() // event 기능을 막음, 특히 submit을 눌렀을 때 새로고침되는 것을 막기위해서

        //console.log(this.state.user_name, this.state.email, this.state.user_pw, this.state.user_pw2)
        
        let result = null;
        
        try{
            let result = await api.postJoin({ username: this.state.user_name, email: this.state.email, password1: this.state.user_pw, password2: this.state.user_pw2 }) // response를 반환
            this.setState({
                username: this.state.user_name, email: this.state.email, password1: this.state.user_pw, password2: this.state.user_pw2 }) // state 설정
            
            console.log(result, "데이터 전송 성공")
             console.log(result)
            // console.log(result.response.status)
            // console.log(result.response.request.response, ">> 전송된 response ")
            // console.log(result.response.request.data, ">> 전송된 data ")


            this.props.history.push('/main');
        }

        catch(error){
            if(error.status === 400){

                var error_email = error.response.data.email
                var error_username = error.response.data.username
                var error_password = error.response.data.password1

                var total_error;

                if(typeof error_email !== "undefined") {
                    total_error += error_email + "\n";
                }
                if(typeof error_username !== "undefined"){
                 total_error += error_username + "\n";
                }
                if(typeof error_password !== "undefined"){
                    total_error += error_password + "\n";
                } 

                alert('회원가입을 하는 과정중 오류가 발생했습니다. 다시 해주세요')
                alert('에러 코드: ' + total_error)

                console.log(error.data.email, "BAD Request, 데이터 전송 실패")
                console.log(error.data.username, "BAD Request, 데이터 전송 실패")
                console.log(error.data.password1, "BAD Request, 데이터 전송 실패")
            }

            console.log(total_error)
            console.log(error.response.status, error.response.statusText, "데이터 전송 실패")
        }
    }   

    render() {
        return (
            <div>
                <form action="" method="POST" onSubmit={this.connectSignUp}>

                    <p>아이디</p>
                    <input name="user_name" className="TextBox" type="text" placeholder=" username" onChange={this.handlingJoin}></input><br />

                    <p>이메일</p>
                    <input name="email" className="TextBox" type="text" placeholder=" abc@abc.co.kr" onChange={this.handlingJoin}></input><br />

                    <p>비밀번호</p>
                    <input name="user_pw" className="TextBox" type="password" placeholder=" password" onChange={this.handlingJoin}></input><br />

                    <p>비밀번호 확인</p>
                    <input name="user_pw2" className="TextBox" type="password" placeholder=" password" onChange={this.handlingJoin}></input><br />

                    <input className="Button" type="submit" value="회원가입"></input>

                </form>
            </div>
        );
    }
}

export default Join;
