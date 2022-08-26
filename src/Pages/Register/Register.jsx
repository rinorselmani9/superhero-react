import React from 'react'
import { Container } from 'react-bootstrap'
import RegisterForm from '../../Components/RegisterForm'
import { api, endpoints } from '../../lib/api'

const Register = () => {

  const submitRegister = async (data,setErrors) => {

    
    const result = await api.call(endpoints.register, data)

    console.log(data);
    console.log(result);

    if(!result.success){
      setErrors([result])
      return
    }
    alert('Redirect to login!')
  }

  return (
    <>
      <Container>
        <h1>Register</h1>
      </Container>
      <RegisterForm submit={submitRegister}/>
    </>
  )
}

export default Register