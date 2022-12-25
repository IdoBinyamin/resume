import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='PersonalDetails' element={<PersonalDetails />} />
          <Route path='AboutMe' element={<AboutMe />} />
        </Routes>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
