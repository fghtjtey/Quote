import { createContext, useReducer } from "react"

export const mainContaxtProvider = createContext()
const initialState = {color: "red"}

const reducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
            default:
                return state
    }
}

function MainContaxt({children}) {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <mainContaxtProvider.Provider value={[state, dispatch]}>
        {children} 
    </mainContaxtProvider.Provider>
  )
}

export default MainContaxt
