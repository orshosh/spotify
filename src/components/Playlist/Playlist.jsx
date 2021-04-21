import React from "react";
import "./Playlist.scss"

export type PlaylistState={
    description: string,
    image: string,
    name: string,
    playlist_id: number

};


class Playlist extends React.Component{

    state: PlaylistState = {
        playlist_id: 3533,
        name: "Best of 60's",
        image: "https://i.scdn.co/image/ab67706f000000035337e18dc6803780d806efba",
        description: "Listen to the best songs from the 60's"

    };


    render() {
        return(
            <div className={'containerCard'}>
                <img className={'playlist_img'} src={this.state.image}/>
                <div className={'details_container'}>
                    <div className={'playlist_title'}>{this.state.name}</div>
                    <div className={'playlist_description'}>{this.state.description}</div>
                </div>
            </div>
        );
    }

}

export default Playlist;
