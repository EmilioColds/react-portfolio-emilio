import React from "react";
import Project from "../components/Project";

function Portfolio() {
    const projects = [
        {
            title: 'Project 1',
            imageUrl: '/assets/',
            deployedUrl: 'The url',
            repoUrl: 'The url'
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