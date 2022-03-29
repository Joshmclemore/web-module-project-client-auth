import React from 'react';

const FriendsList = (props) => {

    const { friends } = props

    
    return (
        <div>
            <h2>Friends List Component</h2>
            {friends.map(friend => {
                return (
                <ul>
                    <li>{friend.name} - {friend.age} - {friend.email}</li>
                </ul>
                )
            })
                        
            }

        </div>
    )
}

export default FriendsList

/*** 
* [ ] When the component mounts, make a call to the api retrieving all friends. Remember that this is a protected route.
* [ ] In `App.js`, add a route to allow this component to be displayed when navigating to `/friends`
* [ ] In your login component, add code to your submission code the ability to redirect to your friendslist component.
 */