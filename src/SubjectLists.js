import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'
import api from './RequestCRUD';

class SubjectLists extends React.Component {
    
    constructor(props){
        super(props);
        this.state={ timerList:[] }
    }

    async GetTimerList(){ // transfer Data to API server through AXIOS ( RequestCRUD.js )
        let result = await api.readTimer()
        this.setState({ 
            timerList : result.data}) // state 설정      
    }

    componentDidMount(){
        this.GetTimerList();
    }

    render() {
        return (
            <div className="App">
                {this.GetTimerList}
                <h2>{this.state.timerList[0]}</h2>
                <USER></USER>
                <UserChallengeList title="코딩">
                </UserChallengeList>
                <UserChallengeList title="운동">
                </UserChallengeList>
                <UserChallengeList title="독서">
                </UserChallengeList>
            </div>
        );
    }
}

function UserCategory(props){
    
}


function USER(props){
    const id = window.sessionStorage.getItem('user_name');

    return(
        <h2>hi {id}</h2>
    )
}

function UserChallengeListButton(props) {
    return (
        <Link to="/main/mainTimer">
            <div className={'UserChallengeList-button'}>
                {props.children}
            </div>
        </Link>
    )
}

function UserChallengeList(props) {
    
    return (
        <div className={'UserChallengeListBoarder'}>
            <div className={'UserChallengeList title'}>
                {props.title}
            </div>
            <UserChallengeListButton button="button">
                측정
            </UserChallengeListButton>
        </div>
    )
}

export default SubjectLists;