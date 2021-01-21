import { useState, useEffect } from 'react';

const useInitialState = (API, CONFIG) => {
    const [ projects, setProjects ] = useState([]);
    useEffect(() => {
        fetch(API, CONFIG)
        .then(response => response.json())
        .then(data => setProjects(data));
    },[]);

    return projects;
}

export default useInitialState;