import { createSlice } from "@reduxjs/toolkit"
const registerSlice = createSlice({
    name : 'register',
    initialState : {
        email : '',
        otp : [],
        formData : {
            email : '',
            name : '',
            contact : null,
            englishLevel : '',
            image : null
        },
        login : false
    },
    reducers : {
        handleLogin : (state) =>{
            state.login = true
        },
        handleEmail : (state,action) => {
            state.email = action.payload.value
        },
        handleOTP : (state,action) => {
            const index = action.payload.index;
            const value = action.payload.value;
            state.otp[index] = parseInt(value)   
        },
        handleFormData : (state , action) =>{
            state.formData[action.payload.type] = action.payload.value
        }
    } 
})

export const registerActions = registerSlice.actions;
export default registerSlice.reducer;