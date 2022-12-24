import React from 'react'
import '../../App.css'
import AboutMe from '../AboutMe/AboutMe'
import PersonalDetails from '../PersonalDetails/PersonalDetails'

export default function Home() {
    return (
        <div className="App">
            <PersonalDetails />
            <AboutMe />
        </div>
    )
}
