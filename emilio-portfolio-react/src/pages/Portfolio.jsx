import React from "react";
import Project from "../components/Project";

function Portfolio() {
    const projects = [
        {
            title: 'Social Network API',
            imageUrl: '/assets/',
            deployedUrl: 'https://youtu.be/E_qafQAr2uwLinks',
            repoUrl: 'https://github.com/EmilioColds/social-network-api'
        },
        {
            title: 'Movie Rating Game',
            imageUrl: '/assets/',
            deployedUrl: 'https://emiliocolds.github.io/movie-rating-game/',
            repoUrl: 'https://github.com/EmilioColds/movie-rating-game'
        },
        // More projects
    ];

    return (
        <section>
            <h2> Portfolio </h2>
            <div className="projects" >
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    )
}

export default Portfolio;