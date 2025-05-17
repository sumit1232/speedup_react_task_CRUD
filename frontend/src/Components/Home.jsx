import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {



    const nav = useNavigate();


    // 1 state defined
    const [data, setData] = useState({name: '', email: '', phonenumber: '', role: ''})


    const dataHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    console.log(data)


    const saveForm = async (e) => {

        e.preventDefault()
        console.log(data)


        await axios.post('http://localhost:5000/users_speedup', data)


        // redirect to userdata component

        nav('/userdata')


    }

    return (
        <>

            <form action="" onSubmit={(e) => saveForm(e)}>


                <div className="container border p-4 shadow-lg">
                    <div className="row fw-bold">
                        <div className="col-md-12">
                            <label htmlFor="">Enter Your Name</label>
                            <input type="text" name="name" value={data.name} id="" onChange={(e) => dataHandler(e)} className='form-control' placeholder='ENTER YOUR FULL NAME' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Enter Your Email</label>
                            <input type="email" name="email" value={data.email} onChange={(e) => dataHandler(e)} id="" className='form-control' placeholder='ENTER YOUR EMAIL' />
                        </div>
                        <div className="col-md-12 my-3">
                            <label htmlFor="">Enter Mobile</label>
                            <input type="tel" name="phonenumber" value={data.phonenumber} onChange={(e) => dataHandler(e)} id="" className='form-control' />
                        </div>

                        <div className="col-md-12 my-3">
                            <label htmlFor="">Role</label>
                            <select name="role" id="" className='form-control' onChange={(e) => dataHandler(e)} value={data.skill}>
                                <option value="none">select</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="developer">developer</option>
                            </select>
                        </div>
                        <div className="col-md-12 mt-3 text-center" >
                            <button className='btn btn-sm btn-dark px-4 fw-bold shadow-lg'>Save User</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Home
