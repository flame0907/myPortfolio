import React, { useEffect, useState } from 'react';
import { projectsData } from './Data';
import { projectsNav } from './Data';
import WorksItems from './WorksItems';

const Works = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0); // State to track the active category

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      <div className="work_filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`work_item ${active === index ? 'active' : ''}`} 
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work_container container grid">
        {projects.map((item) => {
          return <WorksItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
