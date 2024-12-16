import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePostsContext } from "../../contexts/PostsContext";


export default function IndexPosts() {
  const apiUrl = import.meta.env.VITE_API_URL;
  const {posts} = usePostsContext();
  //   console.log(apiUrl);


  
  

  return (
    <>
      <div className="container">
        <h1 className="mt-5">Lista dei post</h1>

        {posts.length > 0 ? (
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th scope="col">Preview</th>
                <th scope="col">Titolo</th>
                <th scope="col">Categoria</th>
                <th scope="col">Pubblicato</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <th scope="row">
                    <img src={apiUrl + post.image} width={50} alt="" />
                  </th>
                  <td>{post.title}</td>
                  <td>
                    <span className="badge text-bg-secondary">{post.category}</span>
                  </td>
                  <td>{post.published ? "Si" : "No"}</td>
                  <td>
                    <Link
                      type="button"
                      to={`/posts/${post.id}`}
                      className="btn btn-primary btn-sm "
                    >
                      <i className="fa-solid fa-eye"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="mt-4">No Posts</h3>
        )}
      </div>


    </>
  );
}
