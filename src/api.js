import axios from 'axios'

const api = (method = 'GET', body, params = null) => {
  // const url = 'https://dashboard-employee.herokuapp.com/employee'
  let url = 'http://localhost:3237/employee'
  if (params) url += `/${params}`
  const options = {
    method,
    url: url,
    mode: 'cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    data: body,
  }
  return axios(options)
}

export default api
