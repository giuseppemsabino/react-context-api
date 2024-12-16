import { createContext, useContext, useEffect, useState } from "react";

// creo il context
const PostsContext = createContext();

// esporto il provider
export const PostsContextProvider = ({ children }) => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [postsData, setPostsData] = useState({
    posts: [],
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(apiUrl + "/")
      .then((res) => res.json())
      .then((data) => {
        const posts = data.map((post) => ({
          id: post.id,
          image: post.image,
          title: post.title,
          category: post.category,
          published: post.published,
        }));

        const newPostsData = { ...postsData, posts };
        setPostsData(newPostsData);
      });
  };

  return (
    <PostsContext.Provider value={postsData}>{children}</PostsContext.Provider>
  );
};

//esporto lo use per il consumers

export const usePostsContext = () => useContext(PostsContext);
