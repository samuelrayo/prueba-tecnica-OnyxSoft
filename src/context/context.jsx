import { createContext, useContext, useState } from "react";


const BooksContext = createContext()

export const useContextCreate = () => {
    return useContext(BooksContext)
}


export const ContextProvider = ({ children }) => {
    const [showCreateBook, setShowCreateBook] = useState(false)

    return (
        <BooksContext.Provider value={{ showCreateBook, setShowCreateBook }}>
            {children}
        </BooksContext.Provider>
    );

}