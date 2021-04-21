import React from "react";
import "./HomePage.scss";

import PlaylistCarousel from "../PlaylistCarousel/PlaylistCarousel";

const data = require('../../data');

class HomePage extends React.Component{

    render() {
        return(
            <div>
                <div>
                <PlaylistCarousel title={"Featured playlist"} data={data.playlists}/>
                </div>
            </div>


        );
    }

}

export default HomePage;
