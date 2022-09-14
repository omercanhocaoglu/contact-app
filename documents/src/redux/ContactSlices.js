import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const contactAdapter = createEntityAdapter();

const initialState = contactAdapter.getInitialState();

export const contactSelector = contactAdapter.getSelectors( (state) => state.contacts );   

const contactSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: contactAdapter.addOne,
        deleteContact: contactAdapter.removeOne,
        deleteAllContact: contactAdapter.removeAll,
    },


});

export const {addContact, deleteContact, deleteAllContact} = contactSlice.actions;

export default contactSlice.reducer;