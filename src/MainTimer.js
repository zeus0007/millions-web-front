import React from "react";
import "./Style.css";
import api from "./RequestCRUD";

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
      totalhour: 0,
      totalminute: 0,
      totalsecond: 0,
      firstTimeClicked: 0,
      paused: 1,
      category: "",
      timerList: []
    };
  }

  async GetTimerList() {
    // transfer Data to API server through AXIOS ( RequestCRUD.js )
    const result = await api.readTimer();
    this.setState({
      timerList: result.data
    }); // state 설정
  }

  async PostTimer() {
    await api.updateTimer(
      this.props.location.state.pk,
      this.state.totalhour,
      this.state.totalminute,
      this.state.totalsecond,
      this.props.location.state.category
    );
  }

  componentDidMount() {
    this.GetTimerList();
  }

  countButton() {
    if (this.state.paused === 0) {
      this.state.paused = 1;
      let { hour, minute, second } = this.state;
      let totalhour,
        totalminute,
        totalsecond = 0;
      totalhour = totalhour + hour;
      totalminute = totalminute + minute;
      totalsecond = totalsecond + second;
      this.setState(prevState => ({
        totalhour,
        totalminute,
        totalsecond,
        second: 0,
        minute: 0,
        hour: 0
      }));
      this.PostTimer();
      clearInterval(this.myInterval);
    } else {
      this.state.paused = 0;
      this.setState(prevState => ({
        paused: prevState.paused
      }));
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
    const { hour, minute, second, category } = this.state;
    const pk = this.props.location.state.pk;
    const pad = n => (n < 10 ? "0" + n : n);
    return (
      <div>
        <div>
          이전에 공부했던 시간
          {this.state.timerList.map(timerSet => {
            if (timerSet.pk === pk) {
              return (
                <div>
                  {pad(timerSet.hour)}:{pad(timerSet.minute)}:
                  {pad(timerSet.second)}에
                </div>
              );
            }
          })}
          + {pad(hour)}:{pad(minute)}:{pad(second)}만큼 노력을 더하다.
          <br />
        </div>
        {this.state.timerList.map(timerSet => {
          if (timerSet.pk === pk) {
            return <div>"{timerSet.category}"에 그대의 노고를 누적중</div>;
          }
        })}
        <button
          onClick={() => {
            this.countButton();
            this.setState(prevState => ({
              paused: prevState.paused
            }));
          }}
        >
          {this.state.paused === 1 ? "측정시작" : "측정중지"}
        </button>
      </div>
    );
  }
}

export default MainTimer;
