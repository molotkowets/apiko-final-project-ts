import { Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/main-styles.css'
import Home from './pages/home/Home';
import Layout from './components/layout/Layout';


function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
      </Routes>
    </>
  );
}

export default App;


