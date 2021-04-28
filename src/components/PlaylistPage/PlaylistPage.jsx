import React from "react";
import "./PlaylistPage.scss"
import axios from "axios";
import type {PlaylistProps} from "../PlaylistCarousel/PlaylistCarousel";
import likedIcone from "../../assets/liked_songs_icon.png";

export type Album={
    album_name: string,
    artists_names: string,
    duration: number,
    is_liked: number,
    name: string,
    release_date:string,
    track_id: number

};

export type PlaylistPageState ={
    playlist ?: PlaylistProps,
    playlist_duration: string,
    playlist_tracks: number,
    tracks:Album[],
    filter:string

};


class PlaylistPage extends React.Component{

    state: PlaylistPageState = {
        playlist_duration:'',
        playlist_tracks:0,
        tracks: [],
        filter:''
    };

    async getTracksApi(){
        const playlist_id = this.props.match.params.id;
        const autho = {
            headers:{'user-access-token':'1ecfbf47-4aa6-458c-b5ce-c607bad6119c'}
        };
        const playlist_tracks = await axios.get(`http://api.sprintt.co/spotify/playlist_tracks/${playlist_id}`,autho);
        this.setState({
            playlist:this.props.location.query,
            playlist_duration:playlist_tracks.data.playlist_duration,
            playlist_tracks:playlist_tracks.data.playlist_tracks,
            tracks:playlist_tracks.data.tracks
        });

    };

    componentDidMount(){
        this.getTracksApi();
    }

    renderTableHeader() {
        let header = ['','TITLE','ARTIST','ALBUM','RELEASE DATE']
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    renderTableData=(filterTracks:Album[])=> {
        return filterTracks.map((track, i) => {
            const { name,artists_names,album_name,release_date} = track;
            return (
                <tr className={'song'} key={i}>
                    <td><img className="like-icon" src={likedIcone}/></td>
                    <td>{name}</td>
                    <td>{artists_names}</td>
                    <td>{album_name}</td>
                    <td>{release_date}</td>
                </tr>
            )
        })
    };

    onFilter = async (val: string) => {
        clearTimeout(this.searchDebounce);
        this.searchDebounce = setTimeout(async () => {
            this.setState({
                filter: val
            });
        }, 300);
    };


    renderTracks(tracks) {

        const filterTracks = tracks.filter((t) => (t.name.toLowerCase() + t.artists_names.toLowerCase() + t.album_name.toLowerCase() +t.release_date).includes(this.state.filter.toLowerCase()));
        return(
            <table className={'tracks-table'}>
            <tbody className={'table-body'}>
            {filterTracks.length > 0 ? <tr className={'titles'}>{this.renderTableHeader()}</tr>: 'No Results'}
            {this.renderTableData(filterTracks)}
            </tbody>
        </table>)
    };


    render() {
        const playlist = this.state.playlist;
        const tracks = this.state.tracks;

        return(
        <div className={'playlistPageContainer'}>
            {playlist ? <header className={'header'} style={{backgroundImage: `url(${playlist.image_url})`}}>
                            <div className={'header-details'}>
                                <div className={'playlist-details'}>
                                    <div className={'playlist-name'}>{playlist.name}</div>
                                    <div className={'playlist-description'}>{playlist.description}</div>
                                </div>
                                <div className={'track-details'}>
                                    <div className={'songs-number'}>{this.state.playlist_tracks} Songs</div>
                                    <div className={'track-duration'}>{this.state.playlist_duration}</div>
                                </div>
                            </div>
                </header>
                :null}
                <div className={'body-playlist'}>

                    {playlist ?
                        <div className={'filter-container'}>
                            <i className='material-icons w3-xxlarge'>search</i>
                            <input type="filter" placeholder="Filter" onChange={(e) => this.onFilter(e.target.value)}/>
                        </div> :null}
                    {playlist ? this.renderTracks(tracks) : <h2>Loading..</h2>}
                </div>
        </div>
    );
    }

}

export default PlaylistPage;