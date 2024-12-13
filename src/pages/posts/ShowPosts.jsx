import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPosts() {
  const postId = useParams().id;
  const apiUrl = import.meta.env.VITE_API_URL;

  // console.log(postId);

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = (id) => {
    const url = `${apiUrl}/${id}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
      setPost()
  };

  return (
    <div className="container">
      <h1>detaggli del post</h1>
      {post && <>
      
      <p>id: {post.id}</p>
      <p>image: {post.image}</p>
      <p>title: {post.title}</p>
      <p>category: {post.category}</p>
      <p>published: {post.published}</p>
      </>}
    </div>
  );
}
