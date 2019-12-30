import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'

class SubjectLists extends React.Component {


    render() {
        return (
            
            <div className="App">
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