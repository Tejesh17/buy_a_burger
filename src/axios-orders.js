import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://react-burger-44016-default-rtdb.firebaseio.com/'
})

export default instance