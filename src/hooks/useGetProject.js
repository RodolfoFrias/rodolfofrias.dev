import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetProject = (API, CONFIG, projectId) => {
  const [project, setProject] = useState({});

  const getProject = () => {
    axios.get(API).then((response) => {
      const project = response.data.projects.find((project) => project.id === projectId);
      setProject(project);
    });
  };

  useEffect(() => {
    getProject();
  }, []);

  return project;
};

export default useGetProject;
