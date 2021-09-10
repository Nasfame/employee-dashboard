import { Fragment, useContext, useEffect } from 'react'
import _ from 'lodash'
import Employee from './Employee'
import EmployeeContext from '../context/EmployeeContext'

const EmployeeList = () => {
  const { emps, setEmps, api } = useContext(EmployeeContext)

  const handleRemoveEmployee = id => {
    setEmps(emps.filter(emp => emp.id !== id))
    api('DELETE', {}, id)
  }

  return (
    <Fragment>
      <div className='emp-list'>
        {!_.isEmpty(emps) ? (
          emps.map(emp => (
            <Employee
              key={emp.id}
              emp={emp}
              handleRemoveEmployee={handleRemoveEmployee}
            />
          ))
        ) : (
          <p className='message'>Welcome to the Admin Dashboard</p>
        )}
      </div>
    </Fragment>
  )
}

export default EmployeeList
