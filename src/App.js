import React from 'react';
import './Style.css';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import HomeApp from "./HomeApp"
import Main from "./Main"
import SubjectLists from "./SubjectLists"
import MainTimer from "./MainTimer"
import Header from "./Header"
import Store from "./store"
import Login from "./Login"

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    }
  }

onLogin = () =>{
  this.setState({
    logged: true
  });
}

onLogout = () =>{
  this.setState({
    logged: false
  });
  window.sessionStorage.clear();
}

componentDidMount(){
  const id = window.sessionStorage.getItem('user_name');
  if(id){
    this.onLogin();
  }
  else{
    this.onLogout();
  }
}

  render() {
    const {logged, onLogout} = this.state;
    return (
      
     
      
      <Store.Provider value={this.state}>
        <Router>

          <Header logged={logged} onLogout = {onLogout}></Header>
          
          <div className="App">
            <Route exact path="/" component={HomeApp} />
            <Route path="/main"  component={Main} />
            <Route exact path="/main" component={SubjectLists} />
            <Route path="/main/mainTimer" component={MainTimer} />
          <Link to="/main">Go to main</Link>
          </div >

        </Router>
        </Store.Provider>
    );
  }
}



export default App;