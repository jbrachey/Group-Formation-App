import React from "react";

function ProfileCreation(){
    return(
        <div>
            <h1>Profile Creation</h1>
            <label for="fname">First name:</label>
            <br></br>
            <input type="text" id="fname" name="fname"/>
            <br></br>
            <br></br>
            <label for="lname">Last name:</label>
            <br></br>
            <input type="text" id="lname" name="lname"/>
            <br></br>
            <br></br>
            <label for="year">Year:</label>
            <br></br>
            <input type="text" id="year" name="year"/>
            <br></br>
            <br></br>
            <label for="skills">Experience/Skills:</label>
            <br></br>
            <input type="text" id="skills" name="skills"/>
            <br></br>
            <br></br>
            <label for="interests">Interests:</label>
            <br></br>
            <input type="text" id="interests" name="interests"/>
            <br></br>
            <br></br>
            <br></br>
            <button class="App-CreateButton">Create Profile</button>

        </div>
    )
}

export default ProfileCreation;