import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": '8662a3f7-50ad-4ce4-9f62-0ea404b86465'
    }
})

export const usersAPI = {
    getUsers(height) {
        return instance.get(`users?page=${Math.ceil(height / 2300) + 1}&count=20`)
            .then(response => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },  
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId) {
            return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status})
    },
    savePhoto(photo) {
        const formData = new FormData()
        formData.append('', photo)
        return instance.put(`profile/photo`, formData)
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(login, password, rememberMe) {
        return instance.post('auth/login', {email:login, password, rememberMe})
    },
    logout() {
        return instance.delete('auth/login')
    },
}
