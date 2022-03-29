import React from 'react';

const AddFriends = (props) => {

    const { handleChange, handleSubmit, form } = props

    const onChange = (evt) => {
        handleChange(evt)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        handleSubmit();
    }

    return (
        <div>
            <h2>Add Friends Component</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input name="name" onChange={onChange} id='name'/>
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input name="age" onChange={onChange} id='age'/>
                </div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input name='email' onChange={onChange} id='email'/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriends

/**

* [ ] When submitting the form, make a call to the approprate api endpoint with your new friend data. 

Remember that this is a protected route.

 */