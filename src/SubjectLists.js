import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import api from "./RequestCRUD";

class SubjectLists extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timerList: []
    };
  }

  async GetTimerList() { // transfer Data to API server through AXIOS ( RequestCRUD.js )ß

    const result = await api.readTimer();
    this.setState({
      timerList: result.data
    }); // state 설정
  }

  componentDidMount() {
    this.GetTimerList();
  }

  render() {
    return (
      <div className="App">
        {this.state.timerList.map(timerSet => (
          <UserChallengeList
            title={timerSet.category}
            pk={timerSet.pk}
            hour={timerSet.hour}
            minute={timerSet.minute}
            second={timerSet.second}
          ></UserChallengeList>
        ))}
        <USER></USER>
      </div>
    );
  }
}

function USER(props) {
  const id = window.sessionStorage.getItem("user_name");

  return <h2>hi {id}</h2>;
}

function UserChallengeListButton(props) {
  return (
    <Link
      to={{
        pathname: "/main/mainTimer",
        state: {
          pk: props.pk,
          category: props.category,
          hour: props.hour,
          minute: props.minute,
          second: props.second
        }
      }}
    >
      <div className={"UserChallengeList-button"}>{props.children}</div>
    </Link>
  );
}

function UserChallengeList(props) {
  return (
    <div className={"UserChallengeListBoarder"}>
      <div className={"UserChallengeList title"}>{props.title}</div>
      <UserChallengeListButton
        pk={props.pk}
        category={props.title}
        hour={props.hour}
        minute={props.minute}
        second={props.second}
        button="button"
      >
        측정
      </UserChallengeListButton>
    </div>
  );
}

export default SubjectLists;
