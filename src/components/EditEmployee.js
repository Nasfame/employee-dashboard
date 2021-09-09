import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import EmployeeContext from '../context/EmployeeContext'
import EmployeeForm from './EmployeeForm'

const EditEmployee = ({ history }) => {
  const { emps, setEmps } = useContext(EmployeeContext)
  const { id } = useParams()
  const empToEdit = emps.find(emp => emp.id === id)

  const handleOnSubmit = emp => {
    const filteredEmps = emps.filter(emp => emp.id !== id)
    setEmps([emp, ...filteredEmps])
    history.push('/')
  }

  return (
    <div>
      <EmployeeForm employee={empToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  )
}

export default EditEmployee
