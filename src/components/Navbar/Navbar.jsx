import React from "react";
import "./Navbar.scss";
import homeIcon from "../../assets/home_icon.png";
import browseIcone from "../../assets/browse_icon.png";
import likedIcone from "../../assets/liked_songs_icon.png";
import logo from "../../assets/logo.png";
import {NavLink} from "react-router-dom";

class Navbar extends React.Component{

    constructor() {
        super();
        this.state = {
            active: ''
        };
    }

    componentDidMount() {
        this.setState({
            active: 'Home'
        })
    }

    clickHandler = (navName)=>{
        this.setState({
            active:navName
        })
    };

    render() {
        return(
            <nav className="Navbar">
                <ul className={'items-list'}>
                    <li className={'item-logo'}>
                        <img className="logo" src={logo}/>
                    </li>
                    <li className={`item ${'Home' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={homeIcon}/>
                            <NavLink className="link" activeClassName={'link-active'} exact to={'/'} onClick={()=>this.clickHandler('Home')} > Home</NavLink>
                        </div>
                    </li>
                    <li className={`item ${'Browse' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={browseIcone}/>
                            <NavLink className="link" activeClassName={'link-active'} to="/Browse" onClick={()=>this.clickHandler('Browse')}>Browse</NavLink>
                        </div>

                    </li>
                    <li className={`item ${'Liked songs' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={likedIcone}/>
                            <NavLink className="link" activeClassName={'link-active'}  to="/LikedSongs" onClick={()=>this.clickHandler('Liked songs')}>Liked songs</NavLink>

                        </div>
                    </li>
                </ul>
        </nav>);
    }

}
export default Navbar;