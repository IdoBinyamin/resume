import { configureStore } from '@reduxjs/toolkit'
import userInfo from './userInfo'
import education from './education'
import projects from './projects'
import experience from './experience'



export const store = configureStore(
    {
        reducer: {
            projects: projects,
            userInfo: userInfo,
            education: education,
            experience: experience
        }

    }
)