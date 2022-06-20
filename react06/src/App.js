import { useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menubar from './modules/Menubar';
import DeptAdd from './pages/DeptAdd';
import DeptList from './pages/DeptList';
import DeptOne from './pages/DeptOne';
import Home from './pages/Home';
import Intro from './pages/Intro';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import UserCtxt, { reducer, initialState } from './modules/store';

function App() {
  // reducer -> Login, Logout (store)
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Provider : context 접근 범위
    <UserCtxt.Provider value={{state, dispatch}}>
      <BrowserRouter>
      <Menubar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/dept" element={<DeptList />} />
          <Route path="/dept/:deptno" element={<DeptOne />} />
          <Route path="/dept/add" element={<DeptAdd />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
      </BrowserRouter>
    </UserCtxt.Provider>
  );
}

export default App;
