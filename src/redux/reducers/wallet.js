import { createReducer } from "@reduxjs/toolkit";


export const walletReducer = createReducer({
    walletAddress: undefined
},{
    setWalletAddress: (state,action) =>{
        state.walletAddress = action.payload;
    },
})