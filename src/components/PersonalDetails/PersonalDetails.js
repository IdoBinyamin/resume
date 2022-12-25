import React from 'react'
import './PersonalDetails.css';
import { AiTwotonePhone, AiFillGithub, AiOutlineHtml5, AiOutlineLinkedin, AiTwotoneHome } from "react-icons/ai"
import { SiGmail, SiMongodb, SiRedux, SiReduxsaga } from "react-icons/si"
import { DiJavascript1, DiReact, DiCss3 } from "react-icons/di"
import { TbBrandReactNative } from "react-icons/tb"
import { useSelector } from 'react-redux'


export default function PersonalDetails() {
  const userDetails = useSelector((state) => state.userInfo.user)

  return (
    <div className='personal-details-container'>
      <h1>{userDetails.fullName}</h1>
      <h2>{userDetails.role}</h2>
      <div>

        <h2>Personal details</h2>

        <p><SiGmail />{' '} {userDetails.mail}</p>
        <p><AiTwotonePhone /> {' '} {userDetails.phone}</p>
        <p> <AiTwotoneHome /> {' '} {userDetails.city}</p>
        <p>
          <AiOutlineLinkedin /> {' '}
          {userDetails.linkdin}

        </p>
        <p>
          <AiFillGithub />{' '} {userDetails.github}

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
