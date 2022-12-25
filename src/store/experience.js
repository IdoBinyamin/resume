import { createSlice } from '@reduxjs/toolkit';

const experience = createSlice({
    name: 'experience',
    initialState: {
        jobs: [
            { years: '', role: '', desc: '' }
        ]
    }
})

export default experience.reducer