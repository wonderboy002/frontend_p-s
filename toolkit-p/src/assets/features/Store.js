import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
export const store=configureStore({
    reducer : todoSlice
});

//every react app should have only a single store also known as single source of truth
//store's values and state is updated only through reducers
//store need to be aware of the reducers
//slice,features used interchangeably