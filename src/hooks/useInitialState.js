import { useState, useEffect } from 'react';
import axios from 'axios';

const useInitialState = (API, CONFIG) => {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    axios.get(API).then((response) => setProjects(response.data.projects));
  };

  useEffect(() => {
    getProjects();
  }, []);

  return projects;
};

export default useInitialState;
