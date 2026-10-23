import React, { useEffect, useState } from 'react'
import { Formik, Field, Form } from 'formik';
import axios from 'axios';

function AddBlog() {
    const [data, setData] = useState([]);
    const [value, setValues] = useState("")
    const [initialValues, setInitialValues] = useState({
        title: "",
        description: "",
        imgURL: ""
    })

    const getData = () => {
        let token = localStorage.getItem("token")
        axios.get("http://localhost:3001/ShowBlog", {
            headers: { token: token }
        })
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <h1>Post Your Blog</h1>
            <Formik
                initialValues={{
                    title: "",
                    description: "",
                    imgURL: ""
                }}
                onSubmit={async (values) => {
                    let token = localStorage.getItem("token")
                    axios.post('http://localhost:3001/AddBlog',
                        values,
                        {
                            headers: { token: token }
                        }
                    )
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                }}>
                <Form>
                    <label htmlFor="title">Title</label>
                    <Field
                        id="title"
                        name="title"
                        placeholder="title"
                        type="text"
                    />

                    <label htmlFor="description">Description</label>
                    <Field
                        id="description"
                        name="description"
                        placeholder="description"
                        type="text"
                    />

                    <label htmlFor="imgURL">Image URl</label>
                    <Field
                        id="imgURL"
                        name="imgURL"
                        placeholder="Image url"
                        type="text"
                    />
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default AddBlog
