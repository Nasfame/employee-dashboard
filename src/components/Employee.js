import { Button, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const Employee = ({ emp, handleRemoveEmployee }) => {
  const history = useHistory()
  const { id, name, designation, date } = emp
  return (
    <Card style={{ width: '18rem' }} className='emp'>
      <Card.Body>
        <Card.Title className='emp-title'>{name}</Card.Title>
        <div className='emp-details'>
          <div>Name: {name}</div>
          <div>Designation: {designation} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant='primary' onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant='danger' onClick={() => handleRemoveEmployee(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Employee
