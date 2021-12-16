
import './App.css';
import Form from './component/Form';
import React, { useState, useEffect} from 'react'
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}

const initialUsers = []
const initialDisabled = true


function App() {

  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {


  }

  const postNewUser = newUser => {

  }

  const inputChange = (name, value) => {

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    }

  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {

  })


  return (
    <div className='container'>
      <header><h1>User Onboarding App</h1></header>
      <Form
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors} 
     
      />

    </div>
  );
}

export default App;
