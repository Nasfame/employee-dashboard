import { Fragment, useContext } from 'react'
import EmployeeContext from '../context/EmployeeContext'
import EmployeeForm from './EmployeeForm'

const AddEmployee = ({ history }) => {
  const { emps, setEmps } = useContext(EmployeeContext)

  const handleOnSubmit = emp => {
    setEmps([...emps, emp])
    history.push('/')
  }

  return (
    <Fragment>
      <EmployeeForm employee={{}} handleOnSubmit={handleOnSubmit} />
    </Fragment>
  )
}

export default AddEmployee
