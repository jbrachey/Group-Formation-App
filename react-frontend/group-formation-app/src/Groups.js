import React from "react";
import App from "./App";
import BottomNav from "./BottomNav";

function Groups(){
    return(
        <div>
            <h1 className="App-header App-h1">Open Groups</h1>
            <div className="App-group">Concrete Conglomerate
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: Python</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
            <br></br>
            <br></br>
            <div className="App-group">Unnamed Team
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: Java</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
            <br></br>
            <br></br>
            <div className="App-group">Team Supreme
                <br></br>
                <img src=""></img>
                <br></br>
                <text className="App-group-info">Required Skills/Experience: C++</text>
                <br></br>
                <button className="App-groupsButton">Join Team</button>
            </div>
            <BottomNav/>
        </div>

    )
}

export default Groups;