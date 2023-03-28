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
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    // initialState is static and isClicked is dynamic (can be referenced for updates)
    const [isClicked, setisClicked] = useState(initialState)

    const setMode = (e) => {
        setCurrentMode(e.target.value)
        // with localstorage, when the user comes back to the site the mode will still remain the same
        localStorage.setItem('themeMode', e.target.value)
        setThemeSettings(false)
    }

    const setColor = (color) => {
        setCurrentColor(color)
        // with localstorage, when the user comes back to the site the mode will still remain the same
        localStorage.setItem('themeColor', color)
        setThemeSettings(false)
    }

    const handleClick = (clicked) => {
        // set isClicked to a new object  which is the initial state (all values are set to false) but clicked key is changed to true
        setisClicked({ ...initialState, [clicked]: true})
    }

    const handleClose = () => {
        setisClicked(initialState)
    }
    

    return (
        <StatContext.Provider
        value={{
            activeMenu, isClicked, screenSize, currentColor, currentMode, themeSettings,
            setActiveMenu, setisClicked, setScreenSize, setThemeSettings,
            handleClick, setMode, setColor, handleClose,
        }}>
            {children}
        </StatContext.Provider>
    )
}

// custom hook to call the context created (can have multiple context providers)
export const useStateContext = () => useContext(StatContext)