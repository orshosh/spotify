import React from "react";
import "./HomePage.scss";
import PlaylistCarousel from "../PlaylistCarousel/PlaylistCarousel";
import homePageList from '../../api';

class HomePage extends React.Component{

    render() {
        return(
            <div className={'homeContainer'}>
                <div>
                    {homePageList.map((playlist,i)=>(
                        <PlaylistCarousel title={playlist.name} data={playlist.data}/>
                    ))}
                </div>
            </div>


        );
    }

}

export default HomePage;
