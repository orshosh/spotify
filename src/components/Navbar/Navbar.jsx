import React from "react";
import "./Navbar.scss";
import homeIcon from "../../assets/home_icon.png";
import browseIcone from "../../assets/browse_icon.png";
import likedIcone from "../../assets/liked_songs_icon.png";
import logo from "../../assets/logo.png";


class Navbar extends React.Component{

    constructor() {
        super();
        this.state = {
            active: "Home"
        };
    }

    clickHandler = (navName)=>{
        this.setState({
            active:navName
        })
    };

    render() {
        return(
            <div className="Navbar">
                <ul className={'items-list'}>
                    <li className={'item-logo'}>
                        <img className="logo" src={logo}/>
                    </li>
                    <li className={`item ${'Home' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={homeIcon}/>
                            <a className="link" href="#" onClick={()=>this.clickHandler('Home')} > Home</a>
                        </div>
                    </li>
                    <li className={`item ${'Browse' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={browseIcone}/>
                            <a className="link" href="#" onClick={()=>this.clickHandler('Browse')}>Browse</a>
                        </div>

                    </li>
                    <li className={`item ${'Liked songs' === this.state.active ? 'active' : ''}`}>
                        <div className={'wrapper'}>
                            <img className="icon" src={likedIcone}/>
                            <a className="link" href="#" onClick={()=>this.clickHandler('Liked songs')}>Liked songs</a>

                        </div>
                    </li>
                </ul>

        </div>);

    }

}
export default Navbar;