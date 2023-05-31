export const setWalletAddress = (walletAddress) => async(dispatch) =>{
    try{
        dispatch({
            type: "setWalletAddress",
            payload: walletAddress,
        });
    } 
    catch (e){
        console.log(e);
    }
}