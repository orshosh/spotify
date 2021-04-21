import React from "react";
import Playlist from "../Playlist/Playlist";
import "./HomePage.scss";


class HomePage extends React.Component{

    render() {
        return(
            <div className={"home"}>
                <Playlist/>
            </div>

        );
    }

}

export default HomePage;
