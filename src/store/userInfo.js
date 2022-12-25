import { createSlice } from '@reduxjs/toolkit';

const infoSlice = createSlice({
    name: 'userInfo',
    initialState: {
        user: {
            fullName: 'Ido Binyamin',
            role: 'Full Stack Developer',
            mail: 'idodavidbinyamin@gmail.com',
            phone: '050-3836970',
            city: 'Rehovot',
            linkdin: 'linkedin.com/in/ido-binyamin-783425248',
            github: 'github.com/IdoBinyamin',
            aboutMe: 'I am a sociable person, striving for excellence. Quick absorber and autodidact , with good analytical and comprehension skills. I\'m looking for a job that will involve complex challenges and affect productresults.',
        }
    },
    // reducers: {}

})

export default infoSlice.reducer