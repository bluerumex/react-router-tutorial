import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    console.log(query);

    return (
        <div>
            <h2>소개</h2>
            <p>{match.params.name}</p>
        </div>
    )
}

export default About;