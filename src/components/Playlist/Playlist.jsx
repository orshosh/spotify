import React from "react";
import "./Playlist.scss";
import {Link, NavLink} from "react-router-dom";

class Playlist extends React.Component{

    render() {
        return(
            <div className={'containerCard'}>
                <img className={'playlist_img'} src={this.props.playlist.image_url}/>
                <NavLink to={{pathname:`/playlist/${this.props.playlist.playlist_id}`}} className={'details_container'}>
                    <div className={'playlist_title'}>{this.props.playlist.name}</div>
                    <div className={'playlist_description'}>{this.props.playlist.description}</div>
                </NavLink>
            </div>
        );
    }

}

export default Playlist;
