import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a57a066b-dc4f-45e7-b19a-9bdb512df49f" 
        
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    setUnfollow(user){
        return instance.delete(`follow/${user.id}`)
    },
    setFollow(user){
        return instance.post(`follow/${user.id}`,{})
    }
}


export const profileAPI = {
    getUser(userId){
        return instance.get(`profile/` + userId)
    },

    getStatus(userId){
        return instance.get(`profile/status/` + userId)
    },

    updateStatusO(status){
        return instance.put('profile/status', {status:status})
    }

}

export const loginAPI = {
    getUser(){
        return instance.get(`auth/me`)
    }, 
    
    login(email, password, rememberMe = false){
        return instance.post('auth/login', {email, password, rememberMe})
    },

    logout(){
        return instance.delete('auth/login')
    }
}
