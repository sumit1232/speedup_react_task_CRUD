import React from 'react'

const Editdata = () => {
  const edituserdata = () => {
    console.log(alert('edit user'));
    
  }

  // edit data
   const saveduserseditform = async (e) => {
        await axios.put('http://localhost:5000/users_speedup');
    }
  return (

    // form
     <form action="" onSubmit={(e) => saveduserseditform(e)}>
                <div className="container border">
                    <div className="row">
                        <div className="col-md-12">
                            <label htmlFor="">Enter Your Name</label>
                            <input type="text" name="name" value={data.name} id="" onChange={(e) => edituserdata(e)} className='form-control' placeholder='ENTER YOUR FULL NAME' />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="">Enter Your Email</label>
                            <input type="email" name="email" value={data.email} onChange={(e) => edituserdata(e)} id="" className='form-control' placeholder='ENTER YOUR EMAIL' />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="">Enter Mobile</label>
                            <input type="tel" name="phonenumber" value={data.phonenumber} onChange={(e) => edituserdata(e)} id="" className='form-control' />
                        </div>

                        <div className="col-md-12">
                            <label htmlFor="">Role</label>
                            <select name="role" id="" className='form-control' onChange={(e) => edituserdata(e)} value={data.skill}>
                                <option value="none">select</option>
                                <option value="admin">Admin</option>
                                <option value="manager">Manager</option>
                                <option value="developer">developer</option>
                            </select>
                        </div>
                        <div className="col-md-12 mt-3 text-center" >
                            <button className='btn btn-sm btn-primary'>Save User</button>
                        </div>
                    </div>
                </div>
            </form>
  )
}

export default Editdata