import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { NavLink } from 'react-router-dom';
const Userdata = () => {

  const [data, setData] = useState([])

  const FetchAPI = async () => {
    try {
      const result = await axios.get('http://localhost:5000/users_speedup')
      console.log(result.data)
      setData(result.data)

    } catch (err) {
      console.log(err)
      console.log("Faild To fetch Data")
    }
  }


  useEffect(() => {
    FetchAPI()
  }, [])
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {
            data.map((val, index) => {
              return (
                <div className="col-md-4 my-2" key={index}>
                  <div className="card" style={{ width: '18rem' }}>

                    <div className="card-body">
                      <h5 className="card-title">{val.name} -- {val.role}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">{val.email}</h6>
                      <p className="card-text">{val.phonenumber}</p>
                      <NavLink to='/editdata'>Edit Data</NavLink>
                      <br />
                      <a href="#" className="card-link">Delete</a>
                    </div>
                  </div>


                </div>
              )
            })
          }


        </div>
      </div>

    </>
  )
}

export default Userdata
