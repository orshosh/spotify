import React from "react";
import "./Playlist.scss";
import {NavLink} from "react-router-dom";

class Playlist extends React.Component{

    render() {
        return(
            <div className={'containerCard'}>
                <img alt={'playlist image'} className={'playlist_img'} src={this.props.playlist.image_url}/>
                <NavLink to={{pathname:`/playlist/${this.props.playlist.playlist_id}`,
                    query:{name:this.props.playlist.name,
                            image_url:this.props.playlist.image_url,
                            description:this.props.playlist.description}}} className={'details_container'}>
                    <div className={'playlist_title'}>{this.props.playlist.name}</div>
                    <div className={'playlist_description'}>{this.props.playlist.description}</div>
                </NavLink>
            </div>
        );
    }

}

export default Playlist;
