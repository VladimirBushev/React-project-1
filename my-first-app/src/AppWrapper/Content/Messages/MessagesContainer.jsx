import Messages from './Messages'
import { whatFriendDialogActionCreator, addMessActionCreator } from '../../../Redux/messages-reducer'
import {connect} from 'react-redux'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        messages: state.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeDialog: (dialog) => {
            dispatch(whatFriendDialogActionCreator(dialog))
        },
        addMess: (message) => {
            dispatch(addMessActionCreator(message))
        }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Messages)
