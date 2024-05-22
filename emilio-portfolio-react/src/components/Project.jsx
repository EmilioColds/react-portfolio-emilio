import React from 'react';

function Project({ title, imageUrl, deployedUrl, repoUrl}) {
    return (
        <div>
            <img src={imageUrl} alt={title} />
            <h3> {title} </h3>
            <a href={deployedUrl} target='_blank' rel="noopener noreferrer" > View Project </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" > View Code </a>
        </div>
    );
}

export default Project;