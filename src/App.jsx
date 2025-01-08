import { BrowserRouter, Routes, Route } from "react-router-dom";

//layout
import DefaultLayout from "./layouts/DefaultLayout";

//contexts
import { PostsContextProvider } from "./contexts/PostsContext";

//pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import IndexPosts from "./posts/IndexPosts";
import ShowPosts from "./posts/ShowPosts";

function App() {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/post" Component={PostsPage} />

            <Route path="/posts">
              <Route index Component={IndexPosts} />
              <Route path=":id" Component={ShowPosts} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

export default App;
