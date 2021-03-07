import Profile from './Profile';
import React from 'react'
import { connect } from 'react-redux';
import { setUserProfile, publishPost, getUserProfile, updateStatus, getStatus, loadPhoto, saveProfile} from '../../../Redux/content-reducer'
import Preloader from '../Users/Preloader';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
 
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = this.props.auth.userId
        if (userId) {
            this.props.getUserProfile(userId)
            if(Math.floor(+userId) === +userId) {
                this.props.getStatus(userId)
            }
        } else {
            this.props.history.push('/login')
        }
    }

    componentWillUnmount() {
        this.props.setUserProfile()
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.usersapi.isFetching} />
                <div style={this.props.usersapi.isFetching ? { display: 'none'} : {}}  >
                    <Profile {...this.props.content} publishPost={this.props.publishPost} changeStatus={this.props.match.params.userId}
                    isAuth={this.props.auth.isAuth} status={this.props.content.status} updateStatus={this.props.updateStatus}
                    isMyProfile={this.props.auth.userId === this.props.content.profile.userId} loadPhoto={this.props.loadPhoto}
                    saveProfile={this.props.saveProfile}/> 
                </div>
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        ...state,
    }
}

export default compose (
    connect(mapStateToProps, { setUserProfile, publishPost, getUserProfile, getStatus, updateStatus, loadPhoto, saveProfile }),
    withRouter)(ProfileContainer)
