
import React from 'react'
import './css/projects.css'
import logo from'./css/github.svg'
function Projects({projectitem}) {
  const { name,description,skills,github}=projectitem;
  
  return (
      <div className='card'>
      <h2>{name}</h2>
      <p>{description}</p>
      <div className='skilldisplay'>
      <label >skills:</label>
      <div className="skillcontainer">
        {skills.map(skill=>(
          <span className='skills'>  {skill} </span>
        ))}
      </div>
      </div>
    
      <span className='gitlink'><a href={github}> <img src={logo} alt="Bootstrap" width="32" height="32"></img></a></span>

    </div>
  )
}

export default Projects

