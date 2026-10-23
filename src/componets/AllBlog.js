import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import ShowBlog from './ShowBlog'
import Container from 'react-bootstrap/Container';
import Button from '@mui/material/Button';

function AllBlog() {
    const [value, setValues] = useState("")
    const [data, setData] = useState(
        [{
            title: "",
            description: "",
            imgURL: ""
        }
        ]
    )
    useEffect(() => {
        axios.get('http://localhost:3001/ShowBlog')
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data)
            })
            .catch(function (error) {
                alert(error.message)
            })
    }, [])

   
    const handlesort = (sort) => {
        axios.get("http://localhost:3001/sorting?sort=" + sort)
            .then(function (response) {
                console.log(response.data.data);
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    
    


    const handlesearch = (e) => {

        if (value) {
            axios.get("http://localhost:3001/searchcon?search=" + value)
                .then(function (response) {
                    console.log(response.data.data);
                    setData(response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                })
        } else {
            // getData()
        }
    };

    // const ascendingEvent = () => {
    //     let datas = [...data]
    //     if(datas.length > 0) {
    //        let result = datas.sort((a,b) => a.title.localeCompare(b.title))
    //        setData(result)
    //     }
    // }

    // const descendingEvent = () => {
    //     let datas = [...data]
    //     if(datas.length > 0) {
    //        let result = datas.sort((a,b) => b.title.localeCompare(a.title))
    //        setData(result)
    //     }
    // }


    return (
        <Container>
            <label for="site-search">Search the site:</label>

            <input type="search" onChange={(e) => setValues(e.target.value)} value={value} />

            <button onClick={handlesearch} >Search</button>

            <Button onClick={() => handlesort(1)}>Ascending</Button>
            <Button onClick={() => handlesort(-1)}>Descending</Button>
            {/* <button onClick={}>Prev data</button> */}


            <div className='main'>
                {
                    data.map((el) => {
                        return <ShowBlog
                            title={el.title}
                            description={el.description}
                            image={el.imgURL}
                        />
                    })
                }
            </div>
        </Container>
    )
}

export default AllBlog
