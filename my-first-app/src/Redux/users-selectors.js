export const getUsers = (state) => {
    return state.usersapi.users
}

export const getHeight = (state) => {
    return state.usersapi.height
}

export const getIsFetching = (state) => {
    return state.usersapi.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersapi.followingInProgress
}