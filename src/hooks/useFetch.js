import { useCallback, useEffect, useReducer } from "react";
import { useIsMounted } from "./useIsMounted";

const fetchReducer = (state, action) =>{
    switch (action.type){
      case "pending": {
        return { status: "pending", data: null, error: null};
      }
      case "resolved": {
        return { status: "resolved", data: action.data, error: null};
      }
      case "rejected": {
        return { status: "rejected", data: null, error: action.error};
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`);
      }
    }
  }

export const useFetch = (url, config) =>{
    
  const [{status, data, error}, dispatch] = useReducer(
    fetchReducer, 
    {status: "idle", data: null, error: null}
    );

    const isMounted = useIsMounted();

    const run = useCallback(() =>{
        fetch(url, config)
        .then(async res =>{
            const json = await res.json();

            if(!isMounted()){
              return;
            }

            if(res.ok){
                dispatch({type: "resolved", data: json});
            }else{
                dispatch({type: "rejected", error: json});
            }
        })
        .catch((err)=>{
          if(!isMounted()){
            return;
          }

            dispatch({type: "rejected", error: err});
        })
    }, [config, url, isMounted]);

    useEffect(() =>{
        run();
    },[run]);

    return {
      status, 
      data, 
      error, 
      run,
      isLoading: status === "pending",
      isIdle: status === "idle",
      isResolved: status === "resolved",
      isRejected: status === "rejected"
    };

}