import React, {createContext, useContext, useState} from "react";

const StatContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)

    // initialState is static and isClicked is dynamic (can be referenced for updates)
    const [isClicked, setisClicked] = useState(initialState)

    const handleClick = (clicked) => {
        // set isClicked to a new object  which is the initial state (all values are set to false) but clicked key is changed to true
        setisClicked({ ...initialState, [clicked]: true})
    }
    
    const [screenSize, setScreenSize] = useState(undefined)

    return (
        <StatContext.Provider
        value={{
            activeMenu, isClicked, screenSize,
            setActiveMenu, setisClicked, setScreenSize,
            handleClick,
        }}>
            {children}
        </StatContext.Provider>
    )
}

// custom hook to call the context created (can have multiple context providers)
export const useStateContext = () => useContext(StatContext)