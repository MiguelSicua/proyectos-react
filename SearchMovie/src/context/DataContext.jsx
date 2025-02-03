import { createContext, useState } from "react";
import { useFetch } from "../Hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [query, setQuery] = useState("bad boys");
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    return (
        <DataContext.Provider value={{setQuery, isLoading, error, data}}>
            {children}
        </DataContext.Provider>
    )

}