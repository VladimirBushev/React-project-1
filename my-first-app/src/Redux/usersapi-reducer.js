import { usersAPI } from '../api/api';

const SET_USERS = 'users/SET_USERS';
const SCROLL_USERS = 'users/SCROLL_USERS'
const HEIGHT_CHANGE = 'users/HEIGHT_CHANGE'
const TOGGLE_IS_FETCHING = 'users/TOGGLE_IS_FETCHING'
const FOLLOW_UNFOLLOW_FLOW= 'users/FOLLOW_UNFOLLOW_FLOW'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS'



let initialState = {
    users: [],
    height: 1000,
    isFetching: false,
    followingInProgress: [],
}

const usersapiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SCROLL_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case HEIGHT_CHANGE: {
            if (action.scroll) {
                return {
                    ...state,
                    height: (state.height + 2300)
                }
            } else {
                return {
                    ...state,
                    height: 1000
                }
            }
        }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: !state.isFetching
            }
        case FOLLOW_UNFOLLOW_FLOW: {
            let stateCopy = {
                ...state,
                users: [...state.users],
            }
            for (let i = 0; i < stateCopy.users.length; i++) {
                if (stateCopy.users[i].id === action.id) {
                    stateCopy.users[i].followed = action.action
                    break
                }
            }
            return stateCopy
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            let stateCopy = {
                ...state,
                followingInProgress: [...state.followingInProgress]
            }
            if (stateCopy.followingInProgress.length === 0) {
                stateCopy.followingInProgress.push(action.id)
            } else {
                for (let i = 0; i < stateCopy.followingInProgress.length; i++) {
                    if (stateCopy.followingInProgress[i] === action.id) {
                        stateCopy.followingInProgress.splice(i, 1)
                        break
                    }
                    if (i === stateCopy.followingInProgress.length - 1) {
                        stateCopy.followingInProgress.push(action.id)
                        break
                    }
                }
            }
            return stateCopy
        }
        default:
            return state;
    }

}

export const toggleIsFetching = () => ({ type: TOGGLE_IS_FETCHING })
const setUsers = (users) => ({ type: SET_USERS, users })
const scrollUsers = (users) => ({ type: SCROLL_USERS, users })
const heightChange = (scroll) => ({ type: HEIGHT_CHANGE, scroll })
const followUnfollowFlow = (id, action) => ({ type: FOLLOW_UNFOLLOW_FLOW, id, action })
const toggleFollowingProgress = (id) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, id })

export const requestUsers = () => {
    return (dispatch) => {
        dispatch(heightChange(false))
        dispatch(toggleIsFetching())
        setTimeout(async () => {
            let data = await usersAPI.getUsers()
            dispatch(setUsers(data.items))
            dispatch(toggleIsFetching())
        }, 500)
    }
}

export const addUsers = (height) => {
    return (dispatch) => {
        window.onscroll = scroller.bind(null, height);
        function scroller(height) {
            if (window.pageYOffset > height) {
                dispatch(heightChange(true));
                dispatch(toggleIsFetching())
                setTimeout(async () => {
                    let data = await usersAPI.getUsers(height)
                    dispatch(scrollUsers(data.items))
                    dispatch(toggleIsFetching())
                }, 500)
            }
        }
    }
}

export const followChanger = (id, followed) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(id))
        setTimeout(async () => {
            try {
                let response
                let action
                if (!followed) {
                    response = await usersAPI.follow(id)
                    action = true
                } else {
                    response = await usersAPI.unfollow(id)
                    action = false
                }
                if (response.data.resultCode === 0) {
                    dispatch(followUnfollowFlow(id, action))
                }
                
            } finally {
                dispatch(toggleFollowingProgress(id))
            }
        }, 500);
    }
}

export default usersapiReducer;