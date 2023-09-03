import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()

    const [Name, setName] = useState("")

    const navigate = useNavigate()



    useEffect(() => {
        axios.get(`http://localhost:5000/api/author/${id}`)

            .then(res => {
                setName(res)
            })
            .catch(err => {
                console.log("🚩🚩🚩❌❌❌❌", err)
            })
    }, [id])


    const onUpdateHandler = (e) => {
        navigate("/")
        e.preventDefault()
        const newObj = {
            Name: Name,
        }
        axios.put(`http://localhost:5000/api/author/${id}`, newObj)
            .then(res => {
                console.log("your Food is added successfully  ✅✅✅✅")
                navigate("/")
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <legend>Update</legend>
            <form onSubmit={onUpdateHandler}>
                <input type='text' value={Name} onChange={(e)=>{setName(e.target.value)}}/>
                <button>Update Food</button>
            </form>
            <Link to="/">
                <button>Cancel</button>
            </Link>

        </div>
    )
}

export default Update