import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api.js'
import EmployeeContext from '../context/EmployeeContext'
import EmployeeForm from './EmployeeForm'

const EditEmployee = ({ history }) => {
  const { emps, setEmps, api } = useContext(EmployeeContext)
  const { id } = useParams() // eslint-disable-next-line
  const empToEdit = emps.find(emp => emp.id == id) //=== doesnt work as localStorage stores as string.

  const handleOnSubmit = emp => {
    // eslint-disable-next-line
    const filteredEmps = emps.filter(emp => emp.id != id)
    setEmps([emp, ...filteredEmps])
    api('PATCH', emp, id)
    history.push('/')
  }

  return (
    <div>
      <EmployeeForm employee={empToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditEmployee
