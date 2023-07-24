import axios from 'axios'

const instance = axios.create({
baseURL: "https://main-dating-mern-backend-1bb75dd2b8e6.herokuapp.com/"
})
export default instance