import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    const [ projects, setProjects ] = useState([]);
    useEffect(() => {
        fetch(API)
        .then(response => response.json())
        .then(data => setProjects(data));
    },[]);

    return projects;
}

export default useInitialState;