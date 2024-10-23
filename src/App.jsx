// import Router from "./react-router/Router";
import '@fortawesome/fontawesome-free/css/all.min.css';
// import NavComponent from './navbar/NavComponent';
import './navbar/navbar.css';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import NoteApp from './redux/features/noteapp/NoteApp';


const App = () => {
  return (
    <Provider store={store}>
      <NoteApp/>
    </Provider>
  )
}

export default App