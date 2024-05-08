
import  Axios  from "axios";
import { useReducer, useState } from "react";
import { factReducer, initialState } from "./factReducer";



export const Fact =() => {

    // const [loading , setLoading] = useState(false)
    // const [fact , setFact] = useState("")
    // const [error ,  setError] = useState(false)


    // Fetch-start : loading : true
    // Fetch-success : loading : false
                    //  : fact : res.data.fact
                    // 
                    // 
    //  fetch-error : loading : false
    //               : error : true

    const [state , dispatch] = useReducer (factReducer , initialState)

    const handleFetch = () => {

        dispatch({type : "Fetch_start"})
        Axios.get("https://catfact.ninja/fact")
        .then((res) => {
            dispatch({type : "Fetch_success" , data: res.data.fact })
            console.log(res)
        })
        .catch((error) => {
            dispatch({type : "Fetch_error"})
            console.log(error)
        })
        
    }

    return(

        <div>
            <button onClick={handleFetch}>
                {state.loading ? "is loading ..." : "Fetch cat fact"}
            </button>
            {state.error && (<p>Error , some thing is wrong</p>)}

            <h1>{state.fact}</h1>
        </div>
    )
}