import React from "react";
import profileImage from '../../public/assets/profile.jpg';

function AboutMe() {
    return (
        <section>
            <h2> About Me </h2>
            <img src={profileImage} alt="Profile" />
            <p> Hi!
                I’m a Mexican photographer 📸 entrepreneur 🧑🏻‍💻 and web developer 💻
                trying to create a better world, one smile at a time 😁 </p>
        </section>
    );
}

export default AboutMe;