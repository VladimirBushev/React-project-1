import {connect} from 'react-redux'
import Users from './Users'

let mapStateToProps = (state) => {
    return {
        users: state.users.users,
    }
}


let UsersContainer = connect(mapStateToProps)(Users)

export default UsersContainer