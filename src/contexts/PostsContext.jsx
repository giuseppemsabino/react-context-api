import { createContext, useContext } from "react";


// creo il context 
const PostsContext = createContext();


// esporto il provider
export const PostsContextProvider = ({children}) => {

    const postsData = {
        posts: [
        {
            "id": 1,
            "title": "ciambellone",
            "content": "questa e la foto di un ciambellone",
            "image": "/ciambellone.jpeg",
            "category": "Food",
            "published": true
        },
        {
            "id": 2,
            "title": "craker",
            "content": "questa e una foto di crakers di barbabietola",
            "image": "/cracker_barbabietola.jpeg",
            "category": "Food",
            "published": false
        },
        {
            "id": 3,
            "title": "pane fritto",
            "content": "questa e la imagine di un pane fritto",
            "image": "/pane_fritto_dolce.jpeg",
            "category": "Dessert",
            "published": true
        },
        {
            "id": 4,
            "title": "pasta barbabietola",
            "content": "questa e l'imagine di pasta di barbabietola",
            "image": "/pasta_barbabietola.jpeg",
            "category": "Pasta",
            "published": false
        },
        {
            "id": 5,
            "title": "torta paesana",
            "content": "questa e l'imagine di una torta paesana",
            "image": "/torta_paesana.jpeg",
            "category": "Dessert",
            "published": true
        }
    ]};
    


    return <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
};

//esporto lo use per il consumers

export const usePostsContext = () => useContext(PostsContext);