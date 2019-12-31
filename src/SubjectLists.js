import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'
import api from './RequestCRUD';
import runnig from './running.jpg';
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
        <h4> {id}님의 도전 LIST</h4>
    )
}

function UserChallengeListButton(props) {
    return (
        <Link to="/main/mainTimer">
            <div className={'UserChallengeList-button hover1'}>
                {props.children}
            </div>
        </Link>
    )
}

function UserChallengeList(props) {
    
    return (
        <div className={'UserChallengeListBoarder'}>
            <div className={'title-boarder'}>
                <div className={'UserChallengeList-title'}>
                    {props.title}
                </div>
            </div>
            <div className={'button-boarder'}>
                <UserChallengeListButton button="button">
                    측정
                </UserChallengeListButton>
            </div>
        </div>
    )
}

export default SubjectLists;