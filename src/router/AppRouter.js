import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/Header'
import AddEmployee from '../components/AddEmployee'
import EmployeesList from '../components/EmployeeList'
import EditEmployee from '../components/EditEmployee'
import EmployeeContext from '../context/EmployeeContext'
import useLocalStorage from '../hooks/useLocalStorage'

const AppRouter = () => {
  const [emps, setEmps] = useLocalStorage('emps', [])

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='main-content'>
          <EmployeeContext.Provider value={{ emps, setEmps }}>
            <Switch>
              <Route component={EmployeesList} path='/' exact={true} />
              <Route component={AddEmployee} path='/add' />
              <Route component={EditEmployee} path='/edit/:id' />
              <Route component={() => <Redirect to='/' />} />
            </Switch>
          </EmployeeContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter
