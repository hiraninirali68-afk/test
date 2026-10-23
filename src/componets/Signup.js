import React from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function Signup() {
  return (
    <div>
      <h1>Sign Up</h1>
    <Formik
      initialValues={{
        name: "",
        lastname: "",
        email: "",
        password: ""
      }}
      onSubmit={async (values) =>{
          axios.post('http://localhost:3001/signup',values)
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
        <label htmlFor="name">First Name</label>
        <Field id="name" name="name" placeholder="Jane" />

        <label htmlFor="lastname">Last Name</label>
        <Field id="lastname" name="lastname" placeholder="Doe" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />

<label htmlFor="password">Email</label>
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

export default Signup
