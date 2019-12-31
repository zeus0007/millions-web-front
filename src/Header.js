import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        const {logged, onLogout} = this.props;
        return(
                    logged ? 
             <Link to ="/" onClick={onLogout}>
                 <div className="Login-Logout-button">로그아웃</div>
                </Link>:    
             null
           

        )
    }
}




export default Header;