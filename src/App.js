import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store,{persistor} from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {/*bilgi için syore bak */}
          <AppRouter />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
