import React from "react";
import "./PlaylistCarousel.scss";
import Playlist from "../Playlist/Playlist";
import {PlaylistProps} from "../../api";

const CAROUSEL_SIZE = 5;

class PlaylistCarousel extends React.Component{

    constructor() {
        super();
        this.state = {carousel_number:1};
    }

    render() {
        const fullPlaylist:PlaylistProps[] = this.props.data;
        const playlists:PlaylistProps[] = fullPlaylist.slice((this.state.carousel_number-1)*CAROUSEL_SIZE,this.state.carousel_number*CAROUSEL_SIZE);
        console.log(fullPlaylist);
        return(
            <div className={'playlistCarouselContainer'}>
                <header>
                    <div className={'title'}>{this.props.title}</div>
                    {(fullPlaylist.length> 5) && <div className={'arrows'}>
                        <div className={`arrow left ${this.state.carousel_number === 1 ? 'able':''}`} onClick={()=>this.setState({carousel_number:1})}/>
                        <div className={`arrow right ${this.state.carousel_number === 2 ? 'able':''}`} onClick={()=>this.setState({carousel_number:2})}/>
                    </div>}
                </header>
                <div className={'wrapper'}>
                        {this.props.data && playlists.map((playlist,index:number)=>(
                            <Playlist key={index} playlist={playlist} />
                        ))}
                </div>
            </div>
        );
    }


}

export default PlaylistCarousel;