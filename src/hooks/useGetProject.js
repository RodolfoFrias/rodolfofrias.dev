import { useState, useEffect } from 'react';

const useGetProject = (API, CONFIG) => {
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(API, CONFIG)
      .then((response) => response.json())
      .then((data) => setProject(data));
  }, []);

  return project;
};

export default useGetProject;
