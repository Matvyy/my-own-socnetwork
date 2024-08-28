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

export const headerAPI = {
    getUser(){
        return instance.get(`auth/me`)
    },

}

export const profileAPI = {
    getUser(userId){
        return instance.get(`profile/` + userId)
    },

}
