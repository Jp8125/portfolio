import React from 'react'
import Projects from './projects'
const data=[
    {
        name:"food website",
        description:"food website  using html,css,bootstrap and php,we used php as back end and html css and bootstrap as front end.",
        skills:['html','css','php','bootstrap','js'],
        github:"https://github.com/Jp8125/React_b.git"
    },
    {
        name:"num game",
        description:"number game using react js in this game 10 buttons will be given if you click any three and total is >10 you wil win",
        skills:['react js','css','html'],
        github:"https://github.com/Jp8125/num_pr1.git"
    },
    {
        name:"api search",
        description:"this web app will be show the searched user name and info using api from github and the content will be displayed in container in react js",
        skills:['reactjs','css','html'],
        github:"https://github.com/Jp8125/api_pr2.git"
    },
    {
        name:"todo list",
        description:"in this app user can add their todos and the todo will be authenticated for perticular user with user name and password ",
        skills:['html','css','nodejs','bootstrap'],
        github:"https://github.com/Jp8125/todo.git"
    }]
function Projectcontainer() {
  
  return (
    <div className='container'>
        <h1>Projects</h1>
        {
            data.map(projectitem=>{
                return <Projects projectitem={projectitem}/>
            })
        }
      
    </div>
  )
}

export default Projectcontainer
