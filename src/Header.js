import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        const {logged, onLogout} = this.props;
        return(
                    logged ? 
             <Link to ="/" onClick={onLogout}>로그아웃</Link>:    
             <Link to = "/login">로그인</Link>

           

        )
    }
}

export default Header;