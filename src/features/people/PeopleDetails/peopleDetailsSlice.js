import { createSlice } from "@reduxjs/toolkit";

const peopleDetailsSlice = createSlice({
    name: "personDetails",
    initialState: {
        personId: 0,
        details: {},
        status: "loading"
    },
    reducers: {
        fetchDataSuccess: (state, { payload }) => {
            state.details = payload.details;
            state.status = "success";
        },
        fetchDataError: (state) => {
            state.status = "error";
        },
        getDetailsForPerson: (state, { payload }) => {
            state.status = "loading";
            state.personId = payload.personId;
        },
    },
});
export const {
    fetchDataSuccess,
    getDetailsForPerson,
    fetchDataError,
} = peopleDetailsSlice.actions;

export const selectPersonState = (state) => state.personDetails;
export const selectPersonId = (state) => selectPersonState(state).personId;
export const selectDetails = (state) => selectPersonState(state).details;
export const selectStatus = (state) => selectPersonState(state).status;

export default peopleDetailsSlice.reducer;