import {configureStore} from "@reduxjs/toolkit";
import Todo_Slice from "./Todo_Slice";
export const store=configureStore({
    reducer : Todo_Slice
});