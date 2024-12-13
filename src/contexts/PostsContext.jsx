import { createContext, useContext } from "react";


// creo il context 
const PostsContext = createContext();


// esporto il provider
export const PostsContextProvider = ({children}) => {
    const postlist = 'lista'
    return <PostsContext.Provider value={postlist}>{children}</PostsContext.Provider>
};

//esporto lo use per il consumers