const { createContext, useState, useContext } = require("react");

const CurrentUserContext = createContext();

export default function CurrentUserContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem("currentUser"));

    const setLogin = (user) => {
        if (!user) {
            localStorage.removeItem("currentUser");
            setCurrentUser(null);
            return;
        }
        localStorage.setItem("currentUser", user);
        setCurrentUser(user);
    }

    return (
        <CurrentUserContext.Provider value={{ currentUser, setLogin }}>
            {children}
        </CurrentUserContext.Provider>
    );
}

export const useCurrentUser = () => {
    return useContext(CurrentUserContext);
}