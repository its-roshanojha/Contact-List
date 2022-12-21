import React from 'react';

const AddContact = () => {
    return (
        <div className='container'>
            <div className='row my-5'>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form className='text-center'>
                        <div className='form-group mb-3'>
                            <input type='text' placeholder='Name' className='form-control' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='email' placeholder='Email' className='form-control' />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='number' placeholder='Phone Number' className='form-control'  />
                        </div>
                        <div className='form-group mb-3'>
                            <input type='submit' value='Add Contact' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;