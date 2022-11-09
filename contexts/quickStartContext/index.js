import { createContext, useReducer } from "react";
import ACTION from "./constants";

export const QuickStartContext = createContext(null);
export default QuickStartContext;

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.finish:
            return true;
        case ACTION.reset:
            return false;
        default:
            return state;
    }
}

const initialDidQuickStart = null;

export const QuickStartProvider = ({ children }) => {
    const [didQuickStart, quickStartDispatch] = useReducer(
      reducer,
      initialDidQuickStart
    );
    return (
      <QuickStartContext.Provider value={{ didQuickStart, quickStartDispatch }}>
        {children}
      </QuickStartContext.Provider>
    );
}