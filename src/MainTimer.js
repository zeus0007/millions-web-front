import React from 'react';
import './Style.css';


function Timer({ second, hour, minute }) {
    const pad = n => (n < 10 ? "0" + n : n);
    return (
        <div>
            {pad(hour)}:{pad(minute)}:{pad(second)}
        </div>
    );
}

class MainTimer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            firstTimeClicked: 0,
            paused: 1,
            timerList: []
        };
    }
    countButton() {
        if (this.state.paused === 0) {
            this.state.paused = 1;
            clearInterval(this.myInterval);
        } else {
            this.state.paused = 0;
            this.setState(prevState => ({
                paused: prevState.paused
            }))
            this.myInterval = setInterval(() => {
                this.setState(prevState => ({
                    second: prevState.second + 1
                }));
                //분 증가
                if (this.state.second === 60) {
                    this.setState(prevState => ({
                        second: 0,
                        minute: prevState.minute + 1
                    }));
                }
                //시간 증가
                if (this.state.minute === 60) {
                    this.setState(prevState => ({
                        minute: 0,
                        hour: prevState.hour + 1
                    }));
                }
            }, 100);
        }



    }
    render() {
        const { hour, minute, second, paused } = this.state;
        const pad = n => (n < 10 ? "0" + n : n);
        return (
            <div>
                <div>
                    00:00:00에 <br />

                    + {pad(hour)}:{pad(minute)}:{pad(second)}만큼 더해서<br />
                    <Timer second={second} hour={hour} minute={minute}></Timer>
                </div>

                과목에 그대의 노고를 누적중
                <button onClick={() => {
                    this.countButton();
                    this.setState(prevState => ({
                        paused: prevState.paused
                    }));
                }}>
                    {this.state.paused === 1 ? "측정시작" : "측정중지"}
                </button>
            </div>
        );
    }
}

export default MainTimer;