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
* [ ] Use the [mockup provided](./addfriends_mockup.png) to build out a simple component allowing you to collect data to add in a new friend.
* [ ] The component should include a form with inputs for each friend attribute and a submit button.
* [ ] When submitting the form, make a call to the approprate api endpoint with your new friend data. Remember that this is a protected route.
* [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends/add`.
 */