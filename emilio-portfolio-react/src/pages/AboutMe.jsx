import React from "react";
import profileImage from '../../public/assets/profile.jpg';

function AboutMe() {
    return (
        <section>
            <h2> About Me </h2>
            <img src={profileImage} alt="Profile" />
            <p> Short bio of the dev. </p>
        </section>
    );
}

export default AboutMe;