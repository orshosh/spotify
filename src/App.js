import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BrowsePage from "./components/BrowsePage/BrowsePage";
import LikedSongsPage from "./components/LikedSongsPage/LikedSongsPage";
import PlaylistPage from "./components/PlaylistPage/PlaylistPage";

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Router>
                        <div className={'navbar'}>
                            <Navbar/>
                        </div>
                        <div className={'page'}>
                            <Switch>
                                <Route exact path={"/"} component={HomePage}/>
                                <Route path={"/Browse"} component={BrowsePage}/>
                                <Route path={"/LikedSongs"} component={LikedSongsPage}/>
                                <Route path={"/Playlist/:id"} component={PlaylistPage}/>
                            </Switch>
                        </div>

                </Router>
            </div>
        )
    }
}

export default App;
