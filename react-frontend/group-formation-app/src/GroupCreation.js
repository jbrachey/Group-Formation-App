import React from "react";

function GroupCreation(){
    return(
        <div>
            <h1>Group Creation</h1>
            <label for="gname">Group Name:</label>
            <br></br>
            <input type="text" id="gname" name="gname"/>
            <br></br>
            <br></br>
            <label for="goals">Group Goals:</label>
            <br></br>
            <input type="text" id="goals" name="goals"/>
            <br></br>
            <br></br>
            <label for="needed">Needed Experience/Skills:</label>
            <br></br>
            <input type="text" id="needed" name="needed"/>
            <br></br>
            <br></br>
            <br></br>
            <button class="App-CreateButton">Create Group</button>
        </div>
    )
}

export default GroupCreation;