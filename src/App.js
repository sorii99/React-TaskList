import { TaskListComponent } from './components/container/task_list';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { NotFoundPage } from './pages/errors/NotFoundPage';
import { LoginPage } from './pages/auth/LoginPage';
import { DashBoard } from './pages/dashboard/DashBoard';

function App() {

  /* TODO: Change session values. */
  let loggedIn = true;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path=''
            element={loggedIn ? <Navigate replace to='/dashboard' /> : <Navigate replace to='/login' />}
          />
          <Route exact path='/login' element={<LoginPage />} />
          <Route exact path='/dashboard'
            element={loggedIn ? (<DashBoard />) : (<LoginPage />)}
          />
          <Route path='*' element={<NotFoundPage />} />
          <Route exact path='/tasks' element={
            loggedIn ? (<TaskListComponent />) : (<LoginPage />)}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;