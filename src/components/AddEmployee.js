import { Fragment, useContext } from 'react'
import EmployeeContext from '../context/EmployeeContext'
import EmployeeForm from './EmployeeForm'

const AddEmployee = ({ history }) => {
  const { emps, setEmps, api } = useContext(EmployeeContext)

  const handleOnSubmit = async emp => {
    await setEmps([...emps, emp])
    api('POST', emp)
    history.push('/')
  }

  return (
    <Fragment>
      <EmployeeForm employee={{}} handleOnSubmit={handleOnSubmit} />
    </Fragment>
  )
}

export default AddEmployee
