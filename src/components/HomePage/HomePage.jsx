import React from "react";
import "./HomePage.scss";
import PlaylistCarousel from "../PlaylistCarousel/PlaylistCarousel";
import axios from "axios";


class HomePage extends React.Component{

    constructor() {
        super();
        this.state={
            playlists:[]
        };
    }

     getHomePlaylistsApi=()=>{
        const autho = {
            headers:{'user-access-token':'1ecfbf47-4aa6-458c-b5ce-c607bad6119c'}
        };
       axios.all([
            axios.get('https://api.sprintt.co/spotify/recently_played_playlists?limit=10',autho),
            axios.get('https://api.sprintt.co/spotify/featured_playlists?limit=10',autho),
            axios.get('https://api.sprintt.co/spotify/mood_playlists?limit=10',autho)
        ]).then(resArr=>([{name:'Recently Played',data:resArr[0].data.playlists},
            {name:'Featured Playlists',data: resArr[1].data.playlists},
            {name:'Mood',data: resArr[2].data.playlists}])).then(reasult=>{
                this.setState({
                    playlists: reasult
                });
        })
    };

    async componentDidMount(){
        await this.getHomePlaylistsApi();
    }

    render() {
        return(
            <div className={'homeContainer'}>
                    {this.state.playlists.map((playlist,i)=>(
                        <PlaylistCarousel key={i} title={playlist.name} data={playlist.data}/>
                    ))}
            </div>


        );
    }

}

export default HomePage;
