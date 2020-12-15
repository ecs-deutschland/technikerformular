import React from "react";
import logo from '../../img/ECS Logo_weiß.jpg'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img className="hvr-wobble-skew" src={logo} alt="logo"/>
             </div>
        )
    }
}

export default Header