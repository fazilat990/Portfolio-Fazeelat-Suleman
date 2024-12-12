import React, { useState, useEffect } from 'react';

function Work() {

  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
        const uniqueCategories = ['All', ...new Set(data.projects.map(project => project.category))];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filterCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className='work-wrap'>
      <div className="container">
        <div className="mb-4 space-x-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterCategory(category)}
              className={`bg-${selectedCategory === category ? 'blue' : 'gray'}-500 hover:bg-${selectedCategory === category ? 'blue' : 'gray'}-700 text-white font-bold py-2 px-4 rounded`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap -mx-4">
          {filteredProjects.map((project, index) => (

            <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 xxl:w-1/5 px-4 mb-8">

              <div className="p-4 rounded relative bg-teal-400/10">
                <div className="text-white-600 absolute top-15 bg-[var(--bg)] p-2"> {project.category}</div>
                <div className="scrolling-img">
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={require(`../assets/images/projects/${project.image}`)}
                      alt={project.title}
                      className="w-full h-auto mb-4 rounded max-h-72 object-cover object-top"
                    />
                  </a>
                </div>
                <h3 className="text-xl font-semibold mb-2"><a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">{project.title}</a></h3>
                <div className="tags flex items-center overflow-auto cursor-grabbing">
                  {project.tags.map((tag, index) => (
                    <span key={index} className='inline-flex items-center capitalize rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 mr-1 mb-1 w-fit-content'>{tag}</span>
                  ))}
                </div>
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="block">View Project</a>
              </div>
            </div>

          ))}
        </div>
      </div>
    </div>
  );

}

export default Work