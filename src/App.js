import { Home } from './Home'
import { Department } from './Department'
import { Product } from './Product'
import { Employee } from './Employee'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h1 className="d-flex justify-content-center m-3">
        React Frontend Publi
      </h1>

      <nav className='navbar navbar-expand-sm bg-light navbar-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/home">
              Home
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/department">
              Department
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/employee">
              Employee
            </NavLink>
          </li>
          <li className='nav-item- m-1'>
            <NavLink className="btn btn-light btn-outline-primary" to="/product">
              Product
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/home' Component={Home} />
        <Route path='/department' Component={Department} />
        <Route path='/employee' Component={Employee} />
        <Route path='/product' Component={Product} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
