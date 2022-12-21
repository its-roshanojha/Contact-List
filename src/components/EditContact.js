import React from 'react'
import { Link } from 'react-router-dom'




const EditContact = () => {
    
    return (
        <div className='container'>
                
                    <>
                        
                        <div className='row my-5'>
                            <div className='col-md-6 shadow mx-auto p-5'>
                                <form className='text-center' >
                                    <div className='form-group mb-3'>
                                        <input type='text' placeholder='Name' className='form-control'
                                            />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type='email' placeholder='Email' className='form-control'
                                           />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type='number' placeholder='Phone Number' className='form-control'
                                           />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <input type='submit' value='Update Contact' className='btn btn-dark' />
                                        <Link to='/' className='btn btn-danger ms-3 '>Cancel</Link>
                                    </div>
                                </form>
                            </div>
                        </div >
                    </>
                

        </div >
    )
}

export default EditContact