
import * as types from "./actionTypes"

let initState = {

    isLoading : false,
    isError : false,
    data : []
}


export const reducer = (state = initState,action)=>{
    const {type,payload} = action;

    switch(type){



        default:{
            return state
        }
    }
}
