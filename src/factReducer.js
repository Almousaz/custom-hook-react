


 export const initialState = {
    loading : false,
    fact : "",
    error : false
 }

  // Fetch-start : loading : true
    // Fetch-success : loading : false
                    //  : fact : res.data.fact
                    // 
                    // 
    //  fetch-error : loading : false
    //               : error : true

     export const factReducer = (state , action) => {
        // {type :  , data}
        if(action.type === 'Fetch_start')
        return{ loading : true , fact : "" , error : false}


        if(action.type === 'Fetch_success')
        return{ loading : false , fact : action.data , error : false}

        
        if(action.type === 'Fetch_error')
        return{ loading : false , fact : "" , error : true}
    };