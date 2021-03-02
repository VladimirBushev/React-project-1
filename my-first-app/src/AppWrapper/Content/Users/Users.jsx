import User from './User'
import React from 'react';
import UserStyle from './User.module.css'

class Users extends React.Component {
    render() {
        return (
            <div>
                <div className={UserStyle.attention}>
                    Это не настоящие пользователи, лишь имитация, для демонстрации интерфейса
                </div>
                {this.props.users.map((user, id) => <User key={id.toString()} name={user.name} img={user.img} id={user.id} />)}
            </div>
        )
    }
}

export default Users