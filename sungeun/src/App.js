import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ContextProvider from "./store/1_reducer";
import FormContextProvider from "./store/3_context";
import ModalProvider from "./store/2_context";
import { Provider } from "react-redux";
import { store } from "./adapters/store";

function App() {
  return (
    <Provider store={store}>
      <ContextProvider>
        <ModalProvider>
          <FormContextProvider>
            <RouterProvider router={router} />
          </FormContextProvider>
        </ModalProvider>
      </ContextProvider>
    </Provider>
  );
}

export default App;
