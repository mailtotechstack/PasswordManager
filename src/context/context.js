import { createContext, useContext } from "react";

export const detailsContext = createContext({
    details:[],
    setDetails: ()=>{}
});

export const DetailsProvider = detailsContext.Provider;

export const useDetails = ()=>{
    const details = useContext(detailsContext);
    if(!details){
        throw new Error("UseDetails is used within a detailsProvider");
    }
    else{
        return details;
    }
}