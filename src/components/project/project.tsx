import React from 'react';
import './projects.scss';

export interface Iprops {
    id: number;
    img: string;
    name: string;
    topics: string[];
}

function Project(props: Iprops) {
    return (
        <div className="projectContainer">
            <img src={props.img} alt={props.name} />
            <div className="projectContent">
                <span className="projectName">{props.name}</span>
                <span className="projectTopics">{props.topics.join(', ')}</span>
            </div>
        </div>
    )
}


export default Project;