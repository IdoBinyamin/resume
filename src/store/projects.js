import { createSlice } from '@reduxjs/toolkit';


const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [
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

    },

})
export default projectsSlice.reducer