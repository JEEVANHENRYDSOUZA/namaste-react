import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatslice"
const store=configureStore({
    reducer:{
        app:appSlice,
        chat: chatSlice,
    },

})


export default store;