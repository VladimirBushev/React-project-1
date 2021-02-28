import UsersStyle from './Users.module.css'
import User from './User'

const UsersAPI = (props) => {
    return (
        <div className={UsersStyle.users} >
            { props.users.map((user, id) => <User 
            key={id.toString()}
            name={user.name}
            img={user.photos.large}
            id={user.id} 
            followed={user.followed}
            followingInProgress={props.followingInProgress}
            followChanger={props.followChanger}
            isAuth={props.isAuth}
            />)}
        </div >
    )
}

export default UsersAPI