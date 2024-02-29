import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    link: {
        github: '#',
        site: '#'
    },
    image: '',
    descrip: '',
    languages : {
        html: false,
        css: false,
        scss: false,
        js: false,
        react: false,
        redux: false,  
        nodeJs: false,
    }
}

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: {
        setModal: (state, action) => {
            const modal = action.payload;
            state = modal;
            return state;
        },
        clearModal: (state, action) => {
            state = initialState;
            return state;
        }        
    }
})

export const { setModal, clearModal } = modalSlice.actions;

export const store = configureStore({
    reducer: {
        modal: modalSlice.reducer
    }
});