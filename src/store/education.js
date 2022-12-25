import { createSlice } from '@reduxjs/toolkit';

const educationSlice = createSlice({
    name: 'education',
    initialState: {
        courses: [

            {
                head: '2021-2022',
                info: 'Full stack course SV collage - Learn how to implement end to end complex application with attention to details. Learned how to handle errors and deliver mission on time, worked in teams and also solo. Create responsive web applications.'
            },
            {
                head: '2021',
                info: 'Full stack boot camp at Coding Academy - get familiarity with Java Script, CSS and HTML. Create a mines sweeper game for web.'
            }
        ]
    }
}
)
export default educationSlice.reducer