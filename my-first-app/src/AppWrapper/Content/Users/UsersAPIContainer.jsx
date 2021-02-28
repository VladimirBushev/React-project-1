import { connect } from 'react-redux'
import { addUsers, followChanger, requestUsers} from '../../../Redux/usersapi-reducer'
import UsersAPI from './UsersAPI'
import React from 'react';
import Preloader from './Preloader';
import { getFollowingInProgress, getHeight, getIsFetching, getUsers } from '../../../Redux/users-selectors';




class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.requestUsers()
    }

    componentDidUpdate() {
        this.props.addUsers(this.props.height)
    }

    render() {
        return (
            <>
                <UsersAPI 
                users={this.props.users} 
                followingInProgress={this.props.followingInProgress}
                followChanger={this.props.followChanger}
                isAuth={this.props.isAuth}/>
                <Preloader isFetching={this.props.isFetching} />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        height: getHeight(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {requestUsers, addUsers, followChanger})(UsersAPIComponent)

