import React from 'react'
import { useSelector } from 'react-redux';
import ItemsShow from '../../ShowTemplettes/ItemsShow/ItemsShow';
import './AboutMe.css';


export default function AboutMe() {

  const courses = useSelector(state => state.education.courses)
  const projects = useSelector(state => state.projects.projects)
  const userDetails = useSelector((state) => state.userInfo.user)



  return (
    <div className='about-me-page'>
      <div id='about-me-container'>
        <div id='abot-me-phar'>
          <h1>About me</h1>
          <p> {userDetails.aboutMe}
          </p>
        </div>
        <div id='info-detailes'>
          {/* <h2>
            Experience
          </h2> */}

          <h2>
            Education
          </h2>
          {courses.map((course, i) => {
            return <ItemsShow key={i} item={course} />
          }
          )}
          <h2>
            Projects
          </h2>
          {projects.map((project, i) => {
            return <ItemsShow key={i} item={project} />
          })}

        </div>
      </div>
    </div >
  )
}
