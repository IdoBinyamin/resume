import React from 'react'
import ProjectShow from '../../ShowTemplettes/ProjectShow/ProjectShow';
import './AboutMe.css';


export default function AboutMe() {
  const projects = [
    {
      head: 'Minesweeper',
      info:
        ' Implementation of the game Minesweeper for scratch with full logic and rules but with a new modern responsive style.',
      using: ' JavaScript, HTML, CSS.'
    },
    {
      head: 'Smart House',
      info:
        'Is a web application that can manage and control all your smart devices for you with a clean and simple design.',
      using: 'React Js, HTML, CSS.'
    },
    {
      head: 'WeatherApp',
      info:
        'A simple react app that integrate with a third party API in order to show the weather data filtered by a user input. With responsive design that show weather in selected cities, save to favorite and more.',
      using: 'React Js, HTML, CSS.'
    },
    {
      head: 'ClothingApp',
      info:
        'A react nativ app that integrate with a third party API in order to let the user builed a clothing set that made of shirt pants and shoes. When the user gets full set he can move to success screen and do it again',
      using: 'React-nativ expo, redax, redaxSaga.'
    },
  ]
  const courses = [

    {
      head: '2021-2022',
      info: 'Full stack course SV collage - Learn how to implement end to end complex application with attention to details. Learned how to handle errors and deliver mission on time, worked in teams and also solo. Create responsive web applications.'
    },
    {
      head: '2020-2021',
      info: 'Full stack boot camp at Coding Academy - get familiarity with Java Script, CSS and HTML. Create a mines sweeper game for web.'
    }
  ]


  return (
    <div className='about-me-page'>
      <div id='about-me-container'>
        <div id='abot-me-phar'>
          <h1>About me</h1>
          <p> I am a sociable person, striving for excellence.
            Quick absorber and autodidact , with good analytical and comprehension skills.
            I'm looking for a job that will involve complex challenges and affect product
            results.
          </p>
        </div>
        <div id='info-detailes'>
          <h2>
            Education
          </h2>
          {courses.map((course, i) => {
            return <ProjectShow key={i} item={course} />
          }
          )}
          <h2>
            Projects
          </h2>
          {projects.map((project, i) => {
            return <ProjectShow key={i} item={project} />
          })}

        </div>
      </div>
    </div >
  )
}
