import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name : 'modal',
    initialState : {
        show : false,
        count : 1
    },
    reducers : {
        handleShow :  (state) =>{
            state.show = true
        },
        handleClose : (state) =>{
            state.show = false
        },
        increaseCount : (state) =>{
            if(state.count > 2)
            {
                state.count=1

            }
            else{
                state.count+=1

            }
        },
        decreaseCount : (state) => {
            state.count--
        }
    }
})
export const modalActions = modalSlice.actions;
export default modalSlice.reducer