import * as React from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import ShowBlog from './ShowBlog';



function Myblog() {
    const [data, setData] = useState([]);

    const getData = () => {
        let token = localStorage.getItem("token")
        axios
            .get("http://localhost:3001/myblog", {
                headers: { token: token }
            })
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
            })
            .catch(function (error) {
                // alert(error.message);
                console.log(error);
            });
    };

    useEffect(() => {
        getData();
    }, []);



    return (
        <>

            {
                data.map((el) => {
                  return <ShowBlog
                  title={el.title}
                  description={el.description}
                  image={el.imgURL}
              />
        
                })
            }

        </>
    );
}

export default Myblog;