import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom'
import timerData from "./RequestCRUD";
import HomeSubTimer from "./HomeSubTimer"

class SubjectLists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            time: "",
            is_main_category: "",
            timerList: []
        };
    }

    componentDidMount() {
        this.loadTimers();
    }

    async loadTimers() {
        const _timerList = await timerData.readTimer();
        this.setState({ timerList: _timerList.data });
    }
    render() {
        return (
            <div className="App">
                {this.state.timerList.map(timerSet => (
                    <HomeSubTimer
                        key={timerSet.pk}
                        pk={timerSet.pk}
                        is_main_category={timerSet.is_main_category}
                        category={timerSet.category}
                        navigation={this.props.navigation}
                    ></HomeSubTimer>
                ))}
                {/* <UserChallengeList title="코딩">
                </UserChallengeList>
                <UserChallengeList title="운동">
                </UserChallengeList>
                <UserChallengeList title="독서">
                </UserChallengeList>*/}

            </div>
        );
    }
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