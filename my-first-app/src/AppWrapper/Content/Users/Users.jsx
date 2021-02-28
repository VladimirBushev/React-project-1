import User from './User'
import React from 'react';

class Users extends React.Component {
    render() {
        return (
            <div>
                {this.props.users.map((user, id) => <User key={id.toString()} name={user.name} img={user.img} id={user.id} />)}
            </div>
        )
    }
}

export default Users