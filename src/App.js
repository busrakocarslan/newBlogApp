import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store,{persistor} from "./app/store";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/*bilgi için store bak */}
          <AppRouter />
        </PersistGate>
      </Provider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
