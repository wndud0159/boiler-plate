import axios from 'axios'

import { LOGIN_USER, REGISTER_USER } from './types'

export function loginUser(dataToSubmit) {

  const request = axios.post('/api/users/login', dataToSubmit)
    .then(response => {
        console.log(response.data)
        return response.data
    }).catch(error => {
        console.log('error : ', error)
    })

    return {
        type: LOGIN_USER,
        payload: request
    }

}

export function registerUser(dataToSubmit) {

    const request = axios.post('/api/users/register', dataToSubmit)
      .then(response => {
          console.log(response.data)
          return response.data
      }).catch(error => {
          console.log('error : ', error)
      })
  
      return {
          type: REGISTER_USER,
          payload: request
      }
  
  }