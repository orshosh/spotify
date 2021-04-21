import React from "react";
import "./Playlist.scss";

class Playlist extends React.Component{

    render() {
        return(
            <div className={'containerCard'}>
                <img className={'playlist_img'} src={this.props.playlist.image_url}/>
                <div className={'details_container'}>
                    <div className={'playlist_title'}>{this.props.playlist.name}</div>
                    <div className={'playlist_description'}>{this.props.playlist.description}</div>
                </div>
            </div>
        );
    }

}

export default Playlist;
