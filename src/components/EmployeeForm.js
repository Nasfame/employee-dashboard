import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4, parse } from 'uuid'

const uID = () => {
  let uuid = uuidv4()
  let parsedUuid = parse(uuid)
  let buffer = Buffer.from(parsedUuid)
  let randInt = buffer.readUInt32BE(0)
  return randInt
}

const EmployeeForm = ({ employee, handleOnSubmit }) => {
  const [emp, setEmp] = useState(employee ?? {name:'',designation:''})

  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    const values = Object.values(emp)
    let errorMsg = ''

    const allFieldsFilled = values.every(field => {
      const value = `${field}`.trim()
      return value !== '' && value !== '0'
    })

    if (allFieldsFilled) {
      const employee = {
        id: emp.id ?? uID(),
        name: emp.name,
        designation: emp.designation,
        date: emp.date ?? new Date(),
      }
      handleOnSubmit(employee)
    } else errorMsg = 'Please fill out all the fields.'

    setErrorMsg(errorMsg)
  }

  const inputChange = event => {
    const { name, value } = event.target
    setEmp(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <div className='main-form'>
      {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Employee Name</Form.Label>
          <Form.Control
            className='input-control'
            type='text'
            name='name'
            value={emp.name}
            placeholder='Enter name of the Employee'
            onChange={inputChange}
          />
        </Form.Group>
        <Form.Group controlId='designation'>
          <Form.Label>Designation</Form.Label>
          <Form.Control
            className='input-control'
            type='text'
            name='designation'
            value={emp.designation}
            placeholder='Enter the designation of the Employee'
            onChange={inputChange}
          />
        </Form.Group>
        <Button variant='primary' type='submit' className='submit-btn'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default EmployeeForm
