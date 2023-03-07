import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UserContextProvider from "./store/3_context";
import PostContextProvider from "./store/4_redux";

function App() {
  return (
    <>
      <UserContextProvider>
        <PostContextProvider>
          <RouterProvider router={router} />
        </PostContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
