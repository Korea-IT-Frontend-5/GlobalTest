import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UserContextProvider from "./store/3_context";
import { Provider } from "react-redux";
import reduxConfig from "./store";

function App() {

  const store = reduxConfig();

  return (
    <>
      <Provider store={store}>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </Provider>
    </>
  );
}

export default App;
