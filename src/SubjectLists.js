import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'
import api from './RequestCRUD';

class SubjectLists extends React.Component {
    
    constructor(props){
        super(props);
        this.state={
            timerList:[]
         };
    }

    async GetTimerList(){ // transfer Data to API server through AXIOS ( RequestCRUD.js )
        let result = await api.readTimer();
        this.setState({
            timerList: result.data
          });
        console.log(result);
    }

    componentDidMount(){
        this.GetTimerList();
    }

    render() {
        return (
            

            <div className="App">
                
                <USER></USER>

                {this.state.timerList.map(timerSet => (
                    <UserChallengeList title={timerSet.category}></UserChallengeList>
                ))}

                
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