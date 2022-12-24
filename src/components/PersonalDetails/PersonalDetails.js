import React from 'react'
import './PersonalDetails.css';
import { AiTwotonePhone, AiFillGithub, AiOutlineHtml5, AiOutlineLinkedin, AiTwotoneHome } from "react-icons/ai"
import { SiGmail, SiMongodb, SiRedux, SiReduxsaga } from "react-icons/si"
import { DiJavascript1, DiReact, DiCss3 } from "react-icons/di"
import { TbBrandReactNative } from "react-icons/tb"



export default function PersonalDetails() {



  return (
    <div className='personal-details-container'>
      <h1>Ido Binyamin</h1>
      <h2>Full Stack Developer</h2>
      <div>

        <h2>Personal details</h2>

        <p><SiGmail /> idodavidbinyamin@gmail.com</p>
        <p><AiTwotonePhone /> 050-3836970</p>
        <p> <AiTwotoneHome /> Rehovot</p>
        <p>
          <AiOutlineLinkedin /> Linkedin profile:{' '}
          <a href=' linkedin.com/in/ido-binyamin-783425248'>
            Here
          </a>
        </p>
        <p>
          <AiFillGithub /> Github profile: {' '}
          <a href='github.com/IdoBinyamin'>
            Here
          </a>
        </p>
      </div>
      <div>
        <h2>
          Frameworks
        </h2>
        <div className='technologies'>
          <p>
            <DiReact size={25} />
            <TbBrandReactNative size={25} />
            <SiRedux size={25} />
            {' '}
            <SiReduxsaga size={25} />
          </p>
        </div>
        <h2>
          Languages
        </h2>
        <div className='technologies'>
          <p>
            <AiOutlineHtml5 size={25} />
            <DiJavascript1 size={25} />
            <DiCss3 size={25} />
          </p>
        </div>
        <h2>
          Databases
        </h2>
        <SiMongodb size={25} />
      </div>
    </div>
  )
}
