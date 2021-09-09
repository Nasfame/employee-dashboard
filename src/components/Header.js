import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Admin Panel</h1>
      <hr />
      <div className='links'>
        <NavLink to='/' className='link' activeClassName='active' exact>
          Employee List
        </NavLink>
        <NavLink to='/add' className='link' activeClassName='active'>
          Add Employee
        </NavLink>
      </div>
    </header>
  )
}

export default Header
