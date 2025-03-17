import React, { useContext, useReducer, useEffect}  from 'react'
import reducer from "./reducer"

//create a context (warehouse)
//provider
//consumer / useContext


const AppContext = React.createContext();

const API = "http://localhost:3000/services";

const initialState = {
    name: "",
    image:"",
    services: [],
};

    
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState); 
    

    const updateHomePage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Nutri-Track",
                image: "./images/hero.svg",
            },
        });
    };
    
    const updateAboutPage = () => {
        return dispatch({
            type: "HOME_UPDATE",
            payload: {
                name: "Nutri-Track",
                image: "./images/about1.svg",
            },
        });
    };

    // to get the API data
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log("datos", data);
            dispatch({type:"GET_SERVICES", payload: data});
        }catch(error) {
            console.log(error);
        }
    };


    //to call the API
    useEffect(() => {
        getServices(API)
    }, []);

    return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage}}>
        {children}
    </AppContext.Provider>
    );
}; 

//global custom hook
const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider, useGlobalContext };