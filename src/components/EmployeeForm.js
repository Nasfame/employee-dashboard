import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid'

const EmployeeForm = ({ employee, handleOnSubmit }) => {
  const emp = employee

  const [errorMsg, setErrorMsg] = useState('')

  const onSubmit = event => {
    event.preventDefault()
    const values = [emp.name, emp.designation]
    let errorMsg = ''

    const allFieldsFilled = values.every(field => {
      const value = `${field}`.trim()
      return value !== '' && value !== '0'
    })

    if (allFieldsFilled) {
      const employee = {
        id: uuidv4(),
        name: emp.name,
        designation: emp.designation,
        date: new Date(),
      }
      handleOnSubmit(employee)
    } else errorMsg = 'Please fill out all the fields.'

    setErrorMsg(errorMsg)
  }

  const inputChange = event => {
    const { name, value } = event.target
    emp[name] = value
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
