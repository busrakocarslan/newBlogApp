
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <AppRouter/>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
