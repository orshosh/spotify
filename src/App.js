import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import BrowsePage from "./components/BrowsePage/BrowsePage";
import LikedSongsPage from "./components/LikedSongsPage/LikedSongsPage";

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <Router>
                    <Navbar/>

                    <Switch>
                        <Route exact path={"/"} component={HomePage}/>
                        <Route path={"/Browse"} component={BrowsePage}/>
                        <Route path={"/LikedSongs"} component={LikedSongsPage}/>
                    </Switch>
                </Router>

            </div>
        )
    }
}

export default App;
