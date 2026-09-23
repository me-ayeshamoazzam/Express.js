import axios from "axios";

const API = axios.create({
    baseURL: "hhtp://localhost:5000/api",
})

export const getUsers = () => API.get("/users")

export const getUserById = (id) => API.get(`/users/${id}`)

export const createUser = (user) => API.post("/users", user)

export const updateUser = (id, user) =>
    API.put(`/users${id}`, user)

export const deleteUser = (id) =>
    API.delete(`/users${id}`)
