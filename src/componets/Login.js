import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function Login() {
  return (
    <div>
      <h1>Login</h1>
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      onSubmit={async (values) =>{
          axios.post('http://localhost:3001/login',values)
        .then(function (response) {
          // handle success
          console.log(response);
          localStorage.setItem("token", response.data.token)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      
      }}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

<label htmlFor="password">Password</label>
        <Field
          id="password"
          name="password"
          placeholder="11111"
          type="password"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </div>
  )
}

export default Login
